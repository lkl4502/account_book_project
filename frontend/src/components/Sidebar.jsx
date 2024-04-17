import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import Divider from "./Divider";

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
  font-size: 16px;
  color: #969696;
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
      <Menu>
        <Divider />
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{ color: "gray", textDecoration: "none" }}
              to={menu.path}
              key={index}
              activeStyle={{ color: "black" }}
            >
              <SidebarItem menu={menu} />
            </NavLink>
          );
        })}
        <Divider />
      </Menu>
    </Side>
  );
}

export default Sidebar;
