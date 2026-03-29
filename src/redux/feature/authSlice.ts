/**
 * authSlice - Quản lý trạng thái xác thực người dùng
 *
 * State lưu trữ:
 *  - accessToken: JWT token từ backend
 *  - user: thông tin người dùng (id, username, email, role)
 *
 * Token và user được khởi tạo từ cookie khi app load (xem use-auth-check.ts)
 * và bị xóa khi logout.
 */
import { IUser } from "@/types/user-d-t";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
  accessToken?: string;
  user?: IUser | undefined;
}

const initialState: AuthState = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Lưu token và user vào Redux state sau khi đăng nhập thành công
    userLoggedIn: (state, action: PayloadAction<{ accessToken: string; user: IUser }>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    // Xóa state và cookie khi đăng xuất
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
      Cookies.remove('userInfo');
    },
  },
});
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
