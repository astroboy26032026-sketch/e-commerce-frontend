export function formatPrice(price: number | string): string {
  const num = typeof price === 'string' ? parseFloat(price) : price;
  return num.toLocaleString('vi-VN') + '₫';
}
