import React, { useContext, useEffect, useState } from "react";
import Text from "../components/Text";
import axios from "axios";
import styled from "styled-components";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 50%;
  grid-template-rows: auto auto auto auto auto;
`;

function Profile() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [profile, setProfile] = useState("");

  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout();
    alert("로그아웃");
    navigate("/");
  };

  const getProfile = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/user/profile", {
        params: {
          id: JSON.parse(localStorage.getItem("user")).id,
        },
      });
      if (res.status === 200) {
        console.log(res.data.data);
        setProfile(res.data.data);
      }
    } catch (err) {
      console.log(err);
      alert(`${err.response.data.message}`);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <ProfileContainer>
        <Text type={"title"} margin={"0px 0px 10px 0px"}>
          이메일
        </Text>

        <Text margin={"0px 0px 40px 0px"}>{profile.email}</Text>

        <Text type={"title"} margin={"0px 0px 10px 0px"}>
          이름
        </Text>

        <Text margin={"0px 0px 40px 0px"}>{profile.name}</Text>

        <Text type={"title"} margin={"0px 0px 10px 0px"}>
          나이
        </Text>

        <Text margin={"0px 0px 40px 0px"}>{profile.age}살</Text>

        <Text type={"title"} margin={"0px 0px 10px 0px"}>
          성별
        </Text>

        <Text margin={"0px 0px 40px 0px"}>{profile.gender}</Text>

        <Text type={"title"} margin={"0px 0px 10px 0px"}>
          휴대폰 번호
        </Text>

        <Text margin={"0px 0px 40px 0px"}>{profile.phone}</Text>

        <Text type={"title"} margin={"0px 0px 10px 0px"}>
          연결 계좌
        </Text>

        <Text margin={"0px 0px 40px 0px"}>
          {!!profile?.Account ? "1개 연결됨." : "연결된 계좌 없음"}
        </Text>
      </ProfileContainer>

      <CustomButton onClick={handleLogout}>로그아웃</CustomButton>
    </>
  );
}

export default Profile;
