import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

function AuthResult() {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const code = parsed.code;

  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      console.log(code);
      navigate("/accountConnect", { state: { code: code } });
    }
  }, [code, navigate]);

  return null;
}

export default AuthResult;
