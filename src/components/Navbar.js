import React from 'react';
import { Menu,Button } from 'antd';
import { Link } from 'react-router-dom';
 // import { useNavigate } from "react-router-dom";
 // import { useSelector } from "react-redux";
export default function Navbar() {
 // const navigate = useNavigate();
  // const loginData = useSelector((state) => state.login);
  //  const handleLogout = () => {
  //  loginData.token = "";
  //    navigate("/loginpage");
  //    document.getElementById("gizlebeni").style.display = 'none';
     
  //  };
  return (
    <div >
       <Menu mode="horizontal" className="navbar"  >
    <Menu.Item >
    <Button  ><Link to="/loginpage">Admin </Link></Button>
    <Button  style={{marginLeft:"10px"}}> <Link to="/">Anasayfa </Link></Button>
    {/* <Button id="gizlebeni"
        onClick={handleLogout} 
      >
        logout
      </Button>  */}
    </Menu.Item>
  </Menu>
    </div>
  )
}
