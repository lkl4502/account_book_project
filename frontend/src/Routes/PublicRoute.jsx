import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

// 비로그인 유저만 접근 가능
// 로그인 유저 접근 불가
const PublicRoute = () => {
  const auth = useContext(AuthContext);
  console.log(`public : ${auth.isLogin}`);
  return auth.isLogin ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
