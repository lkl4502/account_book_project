import { useState, useEffect } from "react";

const useAuth = () => {
  // 인증 상태 관리
  const [isLogin, setIsLogin] = useState(null);
  const [userId, setUserId] = useState(null);

  // 초기 인증 상태 로드
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  // 로그인 함수
  const login = (userId) => {
    setUserId(userId);
    setIsLogin(true);
    localStorage.setItem("userId", userId);
  };

  // 로그아웃 함수
  const logout = () => {
    setUserId(null);
    setIsLogin(false);
    localStorage.removeItem("userId");
  };

  // 인증 상태 반환
  return {
    isLogin,
    userId,
    login,
    logout,
  };
};

export default useAuth;
