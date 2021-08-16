import React,{useState} from 'react'
import { Menu } from "antd";

import {
    AppstoreOutlined,
    CarOutlined,
    FundOutlined,
  } from "@ant-design/icons";

  import { Link } from "react-router-dom";
  import { useHistory } from "react-router-dom";
  const { SubMenu, Item } = Menu;


  const Header = () => {

    const [current, setCurrent] = useState("Autos");

    

    const handleClick = (e) => {
        console.log(e.key);
        setCurrent(e.key);
      };
    

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Inicio</Link>
      </Item>

      <Item key="Autos" icon={<CarOutlined />} className="float-right">
          <Link to="/Autos">Autos</Link>
       </Item>

       </Menu>
  );
};

export default Header;