import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Divider from "./Divider";
import Text from "./Text";

const Side = styled.div`
  display: flex;
  background-color: #333;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100vh;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const NavStyle = styled(NavLink)`
  font-size: 12px;
  font-weight: 600;
  color: #969696;
  margin: 5% 0;
  text-decoration: none;
  &.active {
    color: #ebebeb;
  }
`;

function Sidebar() {
  const menus = [
    { name: "HOME", path: "/home" },
    { name: "MY PROFILE", path: "/profile" },
    { name: "INCOME WRITE", path: "/incomeWrite" },
    { name: "SPENDING WRITE", path: "/spendingWrite" },
    { name: "RECORD CHECK", path: "/recordCheck" },
    { name: "ACCOUNT CONNECT", path: "/accountConnect" },
  ];

  return (
    <Side>
      <Text bold={true} color={"#f0f0f0"} size={"28px"}>
        Hong`s WebSite
      </Text>
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
