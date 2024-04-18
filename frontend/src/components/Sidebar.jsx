import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Divider from "./Divider";

const Side = styled.div`
  padding: 0 40px;
  display: flex;
  background-color: #333;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 15%;
  height: 100%;
  flex-basis: 15%;
  flex-shrink: 0;
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const NavStyle = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  color: #969696;
  margin: 5% 0;
  text-decoration: none;

  &.active {
    color: #ebebeb;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

const MainP = styled.p`
  width: 100%;
  padding-top: 1.5rem;
  font-weight: 600;
  color: #f0f0f0;
  font-size: 28px;
  text-align: center;
`;

const MainContentP = styled.p`
  font-weight: 300;
  font-size: 12px;
  text-align: left;
  color: #9b9b9b;
`;

function Sidebar() {
  const menus = [
    { name: "HOME", path: "/" },
    { name: "MY PROFILE", path: "/profile" },
    { name: "INCOME WRITE", path: "/incomeWrite" },
    { name: "SPENDING WRITE", path: "/spendingWrite" },
    { name: "RECORD CHECK", path: "/recordCheck" },
    { name: "ACCOUNT CONNECT", path: "/accountConnect" },
  ];

  return (
    <Side>
      <MainP>
        Hong`s <br />
        WebSite
      </MainP>
      <MainContentP>
        거래내역의 직접 입력 방식과 연동된 계좌의 거래내역을 가져오는 방식 두
        가지를 모두 지원합니다. <br />
        해당 서비스는 거래내역을 정리하여 보여줌으로 올바른 소비 습관을 세울 수
        있도록 도와주는 서비스입니다.
      </MainContentP>
      <Menu>
        <Divider />
        {menus.map((menu, index) => {
          return (
            <NavStyle exact to={menu.path} key={index}>
              {menu.name}
            </NavStyle>
          );
        })}
        <Divider />
      </Menu>
    </Side>
  );
}

export default Sidebar;
