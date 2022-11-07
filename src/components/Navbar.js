import React from 'react';
import { Menu,Button } from 'antd';

export default function Navbar() {
  return (
    <div >
       <Menu mode="horizontal" className="navbar"  >
    <Menu.Item >
    <Button type="primary">admin</Button>
    </Menu.Item>
  </Menu>
    </div>
  )
}
