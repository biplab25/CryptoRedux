import React, { useState } from 'react'
import { Button, Typography, Menu, Avatar,Drawer } from 'antd';
import { BulbOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined, FundOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const { Title } = Typography;
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon}
          style={{
            width: 32,
          }} />
        <Title level={2} className="logo">
          <Link to="/">CryptoRedux</Link>
        </Title>
      </div>
      
      <Button type="primary" onClick={showDrawer}>
      <i className="fas fa-bars"></i>
      </Button>
      <Drawer placement="left" onClose={onClose} visible={visible}>
      <Menu>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
      </Drawer>
    </div>
  )
}

export default Navbar