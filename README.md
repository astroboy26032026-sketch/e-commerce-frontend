# Hivio - Cửa Hàng Thiết Bị Âm Thanh Trực Tuyến

Hivio là ứng dụng thương mại điện tử chuyên về thiết bị âm thanh cao cấp (tai nghe, loa, DAC/Amp). Được xây dựng với Next.js 14, Express.js và MySQL.

---

## Cài Đặt Nhanh

### Yêu Cầu
- Node.js 18+
- XAMPP (MySQL/MariaDB)

### 1. Clone & Cài Packages

```bash
git clone <repo-url>

# Backend
cd hivio-backend
npm install

# Frontend
cd ../hivio-frontend
npm install
```

### 2. Cấu Hình Database

Mở XAMPP → Start MySQL → Import file SQL:

```
hivio-backend/src/table/hivio.sql
```

### 3. Cấu Hình Environment

**Backend** — `hivio-backend/.env`:
```env
PORT=5000
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=
DATABASE_NAME=hivio
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
```

**Frontend** — `hivio-frontend/.env.local`:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 4. Chạy Ứng Dụng

```bash
# Terminal 1 - Backend (port 5000)
cd hivio-backend
npm run start-dev

# Terminal 2 - Frontend (port 3000)
cd hivio-frontend
npm run dev
```

Mở trình duyệt: **http://localhost:3000**

---

## API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/v1/product/all-products` | Lấy tất cả sản phẩm |
| GET | `/api/v1/product/product-by-slug/:slug` | Lấy sản phẩm theo slug |
| GET | `/api/v1/category/show-category` | Lấy danh mục |
| GET | `/api/v1/brand/all-brand` | Lấy thương hiệu |
| POST | `/api/v1/auth/register` | Đăng ký |
| POST | `/api/v1/auth/login` | Đăng nhập |
| GET | `/api/v1/coupon/all-coupon` | Lấy mã giảm giá |
| POST | `/api/v1/order/create-payment-intent` | Tạo Stripe payment |
| POST | `/api/v1/order/save-order` | Lưu đơn hàng |
