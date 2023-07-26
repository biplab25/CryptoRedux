import logo from './logo.svg';
import './App.css';
import { Navbar, Homepage, Exchanges, News, Cryptocurrencies,CryptoDetails } from './components';
import Layout from 'antd/lib/layout/layout';
import {
  Routes,
  Route,
} from 'react-router';
import { Button, Typography, Menu, Avatar } from 'antd';

const App = () => {
  const { Title } = Typography;
  return (
    <div className="app">

      {/* Navbar */}
      <div className="navbar">
        <Navbar />
      </div>

      {/* Main */}
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/news" element={<News />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>

        {/* Footer */}
        <div className="footer">
          <Title level={5} style={{ color: 'white' }}>
            CryptoRedux © All Rights Reserved.
          </Title>
        </div>
      </div>
    </div>
  );
}

export default App;
