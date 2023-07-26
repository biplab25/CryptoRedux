import React from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic, Spin } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  console.log(useGetCryptosQuery);
  const { data, error, isLoading, isFetching } = useGetCryptosQuery(10);
  if (isFetching) return <Loader />;
  const globalState = data?.data?.stats;
  console.log(globalState);

  return (
    <div>
      
        <Title level={2} className='heading'>Total Crypto Stats</Title>
        <div className='allCryptoStats'>
        <Row>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalState.total} /></Col>
          <Col span={12}><Statistic title="Total Exchanges" value={millify(globalState.totalExchanges)} /></Col>
          <Col span={12}><Statistic title="Total market Cap" value={millify(globalState.totalMarketCap)} /></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalState.total24hVolume)} /></Col>
          <Col span={12}><Statistic title="Total Markets" value={millify(globalState.totalMarkets)} /></Col>
          <Col span={12}><Statistic title="Total Coins" value={globalState.totalCoins} /></Col>
        </Row>
      </div>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies</Title>
        <Title level={2} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified={true} />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={2} className='show-more'><Link to='/news'>Show More</Link></Title>
      </div>
      <News simplified={true} />
    </div>
  )
}

export default Homepage