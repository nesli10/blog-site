import React from 'react';
import { Menu,Button } from 'antd';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div >
       <Menu mode="horizontal" className="navbar"  >
    <Menu.Item >
    <Link to="/loginPage">
    <Button type="primary">admin</Button>
    </Link>
    <Link to="/">
    <Button type="primary" style={{marginLeft:"10px"}}>Anasayfa</Button>
    </Link>
    </Menu.Item>
  </Menu>
    </div>
  )
}
