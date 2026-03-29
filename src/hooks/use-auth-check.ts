"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { userLoggedIn } from "@/redux/feature/authSlice";
import { IUserInfo } from "@/types/user-d-t";
import { useAppDispatch } from "@/redux/hook";

export default function useAuthCheck() {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = Cookies.get("userInfo");

    if (localAuth) {
      let auth: IUserInfo;
      try {
        auth = JSON.parse(localAuth);
      } catch {
        // Cookie bị corrupt, xóa để tránh lỗi lặp lại
        Cookies.remove('userInfo');
        setAuthChecked(true);
        return;
      }
      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
