import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// internal
import { useGetAllCouponsQuery } from "@/redux/api/couponApi";
import { useCreatePaymentIntentMutation,useSaveOrderMutation} from "@/redux/api/orderApiSlice";
import { useAppSelector } from "@/redux/hook";
import { ICheckoutFormData } from "@/types/form-d-t";
import { checkoutSchema } from "@/utils/schema";
import useCartInfo from "./use-cart-info";

export default function useCheckoutSubmit() {

  // cart products
  // offer Coupons
  const { cart_products } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.auth);
  const { data: offerCoupons, isError, isLoading } = useGetAllCouponsQuery();
  // save a order 
  const [saveOrder, { data: saveOrderData }] = useSaveOrderMutation();
  // create Payment Intent
  const [createPaymentIntent, { data: paymentIntentData, error: pIntentErr }] = useCreatePaymentIntentMutation();
  // cart total
  const { total, setTotal } = useCartInfo();

  // state 
  const [couponCode, setCouponCode] = useState<string>('');
  const [discountedTotal, setDiscountedTotal] = useState<number>(0);
  const [shippingCharge, setShippingCharge] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(false);


  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  // use form
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ICheckoutFormData>({
    resolver: yupResolver(checkoutSchema),
  });

  const onSubmit = async (values: ICheckoutFormData) => {
    if (!stripe || !elements) {
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }
  
    if (!paymentIntentData?.data) {
      toast.error("Payment intent client_secret is missing.");
      return;
    }
  
    setLoading(true); // Set loading state to true when submission starts
  
    const { error, paymentIntent } = await stripe.confirmCardPayment(paymentIntentData?.data!, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: values.fname,
          email: values.email,
        },
      },
    });
  
    if (error) {
      toast.error('Lỗi thanh toán: ' + (error as unknown as Error).message);
      setLoading(false); // Reset loading state in case of error
      return;
    }
  
    if (paymentIntent) {
      try {
        // Directly use the result of the mutation
        const saveOrderResult = await saveOrder({
          amount: paymentIntent.amount / 100,
          paymentIntentId: paymentIntent.id,
          products: cart_products,
          shipCost: shippingCharge,
          status: "pending",
          userInfo: {
            username: `${values.fname} ${values.lname}`,
            userId: user?.id as number,
            ...values,
          },
        }).unwrap(); // Unwrap to handle promise directly
  
        // Check the returned result from the saveOrder function
        if (saveOrderResult?.data?.orderId) {
          localStorage.removeItem("cart_products");
          router.push(`/order/${saveOrderResult.data.orderId}`);
        } else {
          toast.error("Failed to save order. Please try again.");
        }
      } catch (saveOrderError) {
        console.error('Error saving order:', saveOrderError);
        toast.error("Error saving order. Please try again.");
      }
    }
  
    setLoading(false); // Reset loading state after submission completes
  };
  

  // create payment intent
  useEffect(() => {
    let ignore = false;
    if (total) {
      if (!ignore) {
        createPaymentIntent({ amount: total + shippingCharge });
      }
    }
    return () => {
      ignore = true;
    };
  }, [createPaymentIntent, total, shippingCharge]);

  //  coupon form submit
  const handleCouponSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Find the coupon by couponCode
    const coupon = offerCoupons?.data.find((c) => c.couponCode === couponCode);

    if (!coupon) {
      toast.error('Mã giảm giá không hợp lệ!');
      setDiscountedTotal(0);
      return;
    }

    // Check if the coupon is expired
    const currentDate = new Date();
    const expiryDate = new Date(coupon.endTime);

    if (currentDate > expiryDate) {
      toast.error('Mã giảm giá đã hết hạn!');
      setDiscountedTotal(0);
      return;
    }

    // Check if total amount meets the minimum amount requirement
    if (total < coupon.minimumAmount) {
      toast.error(`Đơn hàng tối thiểu ${coupon.minimumAmount.toLocaleString('vi-VN')}₫ để dùng mã này`);
      setDiscountedTotal(0);
      return;
    }

    // Calculate the discount
    const discountAmount = (coupon.discountPercentage / 100) * total;
    const newTotal = total - discountAmount;

    setTotal(newTotal);
    toast.success(`Áp dụng mã thành công! Giảm ${coupon.discountPercentage}%`);
    setCouponCode('');
  };

  // handle shipping charge
  const handleShippingCharge = (charge: string) => {
    setShippingCharge(Number(charge));
  }

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    setCouponCode,
    handleCouponSubmit,
    handleShippingCharge,
    shippingCharge,
    total,
    cart_products,
    loading,
  }
}