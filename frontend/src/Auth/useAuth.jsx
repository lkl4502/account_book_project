import { useState, useEffect } from "react";

const useAuth = () => {
  // 인증 상태 관리
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  // 초기 인증 상태 로드
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUserId = localStorage.getItem("userId");
    if (storedToken && storedUserId) {
      setToken(storedToken);
      setUserId(storedUserId);
      setIsLogin(true);
    }
  }, []);

  // 로그인 함수
  const login = (token, userId) => {
    setToken(token);
    setUserId(userId);
    setIsLogin(true);
    localStorage.setItem("authToken", token);
    localStorage.setItem("userId", userId);
  };

  // 로그아웃 함수
  const logout = () => {
    setToken(null);
    setUserId(null);
    setIsLogin(false);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
  };

  // 인증 상태 반환
  return {
    isLogin,
    token,
    userId,
    login,
    logout,
  };
};

export default useAuth;
