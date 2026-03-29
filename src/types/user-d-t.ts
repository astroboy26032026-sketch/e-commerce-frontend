export type IUser = {
  id?: number;
  email: string;
  username: string;
  role?: "admin" | "user";
  password: string;
};
export type ILoginUser = {
  email: string;
  password: string;
};

export type IUserInfo = {
  accessToken: string;
  user: IUser;
}

export type IUpdateUser = {
  username: string;
  email: string;
  phone?: string;
  role?: "admin" | "user";
  address?: string;
  bio?: string;
};

export type IChangePass = {
  currentPassword:string;
  newPassword:string
}