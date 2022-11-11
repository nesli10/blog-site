import React from 'react';
import { Menu,Button } from 'antd';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div >
       <Menu mode="horizontal" className="navbar"  >
    <Menu.Item >
    <Button  ><Link to="/loginpage">Admin </Link></Button>
    <Button  style={{marginLeft:"10px"}}> <Link to="/">Anasayfa </Link></Button>
    </Menu.Item>
  </Menu>
    </div>
  )
}
