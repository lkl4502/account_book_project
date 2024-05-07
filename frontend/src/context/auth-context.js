import { createContext } from "react";
import { User } from "../Auth/useAuth";

export const AuthContext = createContext({
  isLogin: false,
  user: User,
  login: () => {},
  logout: () => {},
});
