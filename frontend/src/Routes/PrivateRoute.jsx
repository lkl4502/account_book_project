import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

// 로그인 유저만 접근 가능
// 비로그인 유저 접근 불가
const PrivateRoute = () => {
  const auth = useContext(AuthContext);

  if (!auth.isLoggedIn) {
    alert("로그인이 필요한 기능입니다.");
  }

  return auth.isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
