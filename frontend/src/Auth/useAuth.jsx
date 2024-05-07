import { useState, useEffect } from "react";

class User {
  constructor(id, email, name) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
}

const useAuth = () => {
  // 인증 상태 관리
  const [isLogin, setIsLogin] = useState(null);
  const [user, setUser] = useState(null);

  // 초기 인증 상태 로드
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  // 로그인 함수
  const login = (id, email, name) => {
    const user = new User(id, email, name);
    setUser(user);
    setIsLogin(true);
    localStorage.setItem("user", JSON.stringify(user));
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
    setIsLogin(false);
    localStorage.removeItem("user");
  };

  // 인증 상태 반환
  return {
    isLogin,
    user,
    login,
    logout,
  };
};

export { useAuth, User };
