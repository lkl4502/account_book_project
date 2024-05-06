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
    console.log(localStorage.getItem("userId"));
    auth.logout();
    console.log(localStorage.getItem("userId"));
    navigate("/");
  };

  const getProfile = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/user/profile", {
        email: localStorage.getItem("userId"),
      });
      if (res.status === 200) {
        setProfile(res.data.data);
      }
    } catch (err) {
      console.log(err.response.data);
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
      </ProfileContainer>

      <CustomButton onClick={handleLogout}>로그아웃</CustomButton>
    </>
  );
}

export default Profile;
