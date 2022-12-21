import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

//import { useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";

export default function Navbar() {
  // const navigate = useNavigate();
  //const loginData = useSelector((state) => state.login);
  // const handleLogout = () => {
  //    loginData.token = "";
  //   navigate("/loginpage");

  // };

  return (
    <div>
      <Menu mode="horizontal" className="navbar">
        <Menu.Item className="navbaritem">
          <Link className="navbarlink" to="/loginpage">
            ADMİN
          </Link>
        </Menu.Item>
        <Menu.Item className="navbaritem">
          <Link className="navbarlink" to="/">
            ANASAYFA
          </Link>
        </Menu.Item>
        {/* {loginData.token ? (
            <Button 
            style={{
              position:'relative',
              left:"1050px"
            }}
             onClick={handleLogout}>
              logout
            </Button>
          ) : (
            ""
          )} */}
      </Menu>
    </div>
  );
}

