import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./MenuTop.scss";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo></Logo>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/upload">Upload Video</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
