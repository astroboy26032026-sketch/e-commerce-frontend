'use client';
import { IReviewFormData } from '@/types/form-d-t';
import { reviewSchema } from '@/utils/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import ErrMsg from '../err-msg';
import { useSaveReviewMutation } from '@/redux/api/reviewApiSlice';
import { useAppSelector } from '@/redux/hook';
import toast from 'react-hot-toast';
import { IErrorResponse } from '@/types/error-res-d-t';

// prop type
type IProps = {
    productId:number;
}

export default function ShopReviewForm({productId}:IProps) {
  const [saveReview,{isLoading,error}] = useSaveReviewMutation();
  const {user} = useAppSelector(state => state.auth);
  const {register,handleSubmit,formState: { errors },reset} = useForm<IReviewFormData>({
    resolver: yupResolver(reviewSchema),
  });
  const [rating, setRating] = useState(1);

  const handleRating = (rate: number) => {
    setRating(rate)
  }


  const onSubmit = async (values: IReviewFormData) => {
    try {
        if(!user){
          toast.error('Vui lòng đăng nhập trước');
          return;
        } else {
            const review_data = {
                productId,
                rating,
                review:values.review,
                userId:user.id as number
            }
            const save_review = await saveReview(review_data).unwrap();
            if(save_review){
                toast.success('Đánh giá đã được lưu thành công');
                reset();
            }
        }
    } catch (error) {
        const errRes = error as IErrorResponse;
         toast.error(errRes.data.message as string);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="tp-product-details-review-form-rating d-flex align-items-center">
        <p>Đánh giá của bạn :</p>
        <div className="tp-product-details-review-form-rating-icon d-flex align-items-center">
          <Rating onClick={handleRating} size={20} initialValue={rating}/>
        </div>
    </div>
     <div className="tp-product-details-review-input-wrapper">
        <div className="tp-product-details-review-input-box">
            <div className="tp-product-details-review-input">
                <textarea {...register("review")} id="review" name="review" placeholder="Viết đánh giá của bạn tại đây..."></textarea>
            </div>
            <div className="tp-product-details-review-input-title">
                <label htmlFor="review">Đánh giá của bạn</label>
            </div>
            <ErrMsg msg={errors.review?.message as string} />
        </div>
        <div className="tp-product-details-review-input-box">
            <div className="tp-product-details-review-input">
                <input {...register("name")} name="name" id="name" type="text" placeholder="Nguyễn Văn A"/>
            </div>
            <div className="tp-product-details-review-input-title">
                <label htmlFor="name">Họ và Tên</label>
            </div>
            <ErrMsg msg={errors.name?.message as string} />
        </div>
        <div className="tp-product-details-review-input-box">
            <div className="tp-product-details-review-input">
                <input {...register("email")} name="email" id="email" type="email" placeholder="info@hivio.vn"/>
            </div>
            <div className="tp-product-details-review-input-title">
                <label htmlFor="email">Email của bạn</label>
            </div>
            <ErrMsg msg={errors.email?.message as string} />
        </div>
    </div>
     <div className="tp-product-details-review-btn-wrapper mt-20">
        <button type='submit' className="tp-product-details-review-btn">Gửi</button>
     </div>
    </form>
  )
}
