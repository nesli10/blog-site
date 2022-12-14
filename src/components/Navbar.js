import React from "react";
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
          <Button>
            <Link to="/loginpage">Admin </Link>
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button>
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
        <Menu.Item style={{ marginLeft: "auto" }}>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
              marginTop: "0.5rem",
              borderRadius: "20px",
            }}
          />
        </Menu.Item>
      </Menu>
    </div>
  );
}
