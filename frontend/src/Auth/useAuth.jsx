import { useState, useEffect } from "react";

const useAuth = () => {
  // 인증 상태 관리
  const [isLogin, setIsLogin] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);

  // 초기 인증 상태 로드
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUserName = localStorage.getItem("userName");
    if (storedUserId) {
      setUserId(storedUserId);
      setUserName(storedUserName);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  // 로그인 함수
  const login = (userId, userName) => {
    setUserId(userId);
    setUserName(userName);
    setIsLogin(true);
    localStorage.setItem("userId", userId);
    localStorage.setItem("userName", userName);
  };

  // 로그아웃 함수
  const logout = () => {
    setUserId(null);
    setUserName(null);
    setIsLogin(false);
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
  };

  // 인증 상태 반환
  return {
    isLogin,
    userId,
    userName,
    login,
    logout,
  };
};

export default useAuth;
