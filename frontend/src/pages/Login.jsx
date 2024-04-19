import React, { useContext, useState } from "react";
import Text from "../components/Text";
import InputBox from "../components/InputBox";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../context/auth-context";

function Login() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    auth.login(email, pw);

    // await new Promise((r) => setTimeout(r, 1000));

    // const response = await fetch(
    //   "로그인 서버 주소",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: pw,
    //     }),
    //   }
    // );
    // const result = await response.json();

    // if (response.status === 200) {
    //   setLoginCheck(false);
    //   // Store token in local storage
    //   sessionStorage.setItem("token", result.token);
    //   sessionStorage.setItem("email", result.email); // 여기서 userid를 저장합니다.
    //   sessionStorage.setItem("role", result.role); // 여기서 role를 저장합니다.
    //   sessionStorage.setItem("storeid", result.storeId); // 여기서 role를 저장합니다.
    //   console.log("로그인성공, 이메일주소:" + result.email);
    //   navigate("/"); // 로그인 성공시 홈으로 이동합니다.
    // } else {
    //   setLoginCheck(true);
    // }
  };

  return (
    <>
      <form>
        <Text type={"title"} margin={"0px 0px 10px 0px"}>
          이메일
        </Text>

        <InputBox
          type={"email"}
          value={email}
          setValue={setEmail}
          placeholder={"이메일을 입력해주세요."}
        />

        <Text type={"title"} margin={"20px 0px 10px 0px"}>
          비밀번호
        </Text>
        <InputBox
          type={"password"}
          value={pw}
          setValue={setPw}
          placeholder={"비밀번호를 입력해주세요."}
        />
        <CustomButton onClick={handleLogin} disabled={!email || !pw}>
          등록
        </CustomButton>
      </form>
    </>
  );
}

export default Login;
