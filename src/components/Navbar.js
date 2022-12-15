import React, { useState } from "react";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
//import { useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";

export default function Navbar() {
  // const navigate = useNavigate();
  //const loginData = useSelector((state) => state.login);
  // const handleLogout = () => {
  //    loginData.token = "";
  //   navigate("/loginpage");

  // };
  const { Search } = Input;
  const [admin, setAdmin] = useState(false);
  const removeSearch = () => {
    setAdmin(true);
  };
  const addSearch = () => {
    setAdmin(false);
  };
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />;

  const onSearch = (value) => console.log(value);
  return (
    <div>
      <Menu mode="horizontal" className="navbar">
        <Menu.Item>
          <Button onClick={removeSearch}>
            <Link to="/loginpage">Admin </Link>
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button onClick={addSearch}>
            <Link to="/">Anasayfa </Link>
          </Button>
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
        {!admin ? (
          <Menu.Item style={{ marginLeft: "auto" }}>
            <Search
              placeholder="haber ara"
              onSearch={onSearch}
              style={{
                width: 200,
                marginTop: "0.5rem",
                borderRadius: "20px",
              }}
            />
          </Menu.Item>
        ) : (
          ""
        )}
      </Menu>
    </div>
  );
}

