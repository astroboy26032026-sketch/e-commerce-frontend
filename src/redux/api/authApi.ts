import Cookies from "js-cookie";
import { apiSlice } from "@/redux/api/apiSlice";
import { IDBResponseDT, ISQLUpdateResponse } from "@/types/db-response-dt";
import { IChangePass, ILoginUser, IUpdateUser, IUser } from "@/types/user-d-t";
import { userLoggedIn } from "../feature/authSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // register user
    registerUser: builder.mutation<IDBResponseDT<IUser>, IUser>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    // login user 
    loginUser: builder.mutation<IDBResponseDT<{token:string;user:IUser}>, ILoginUser>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({email, password}, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          Cookies.set(
            "userInfo",
            JSON.stringify({
              accessToken: data.data.token,
              user: data.data.user,
            }),
            { expires: 1 }
          );

          dispatch(
            userLoggedIn({
              accessToken:data.data.token,
              user:data.data.user,
            })
          );
        } catch (err) {
          // `onError` side-effect
          // Login error handled in component via toast
        }
      },
    }), 
    // login user 
    updateUser: builder.mutation<IDBResponseDT<ISQLUpdateResponse>, {id:number;user:IUpdateUser}>({
      query: ({id,user}) => ({
        url:`/auth/update-profile/${id}`,
        method: "PATCH",
        body: user,
      }),

      async onQueryStarted({ id, user }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
    
          // Update the user data in cookies if needed
          const existingUserInfo = Cookies.get("userInfo");
          if (existingUserInfo) {
            const parsedUserInfo = JSON.parse(existingUserInfo);
            const updatedUser = { ...parsedUserInfo.user, ...user }; // Merge the updated fields
    
            // Update the cookie with new user data
            Cookies.set(
              "userInfo",
              JSON.stringify({
                accessToken: parsedUserInfo.accessToken,
                user: updatedUser,
              }),
              { expires: 1 }
            );
    
            // Dispatch the updated user to Redux
            dispatch(
              userLoggedIn({
                accessToken: parsedUserInfo.accessToken,
                user: updatedUser,
              })
            );
          }
        } catch (err) {
          // Update error handled in component
        }
      }

    }), 

    // change password
    changePassword: builder.mutation<IDBResponseDT<null>,IChangePass>({
      query: ({currentPassword,newPassword}) => ({
        url:`/auth/change-password`,
        method: "POST",
        body: {currentPassword,newPassword},
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
  useChangePasswordMutation,
} = authApi;
