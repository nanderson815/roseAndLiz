import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './app.css';

const client = Client.buildClient({
  storefrontAccessToken: '085ae53fc5ba0d66bf927ff524bf37cd',
  domain: 'rose-and-liz.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
