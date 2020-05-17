import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
import './index.css';

const Flexbox = styled.div`
display: flex;
height: 100%;
width: 100%;
`;

const BackgroundRight = styled.div`
background: #712828;
flex: 1;
width: 1253px;
height: 100%;
`;

const BackgroundLeft = styled.div`
background: white;
flex-basis: 34.73%;
height: 100%;
`;

const Icon = styled.img`
  width: 152px;
  height: 152px;
  position: fixed;
  bottom: 595px;
  right: 1525px;
`;

const TransIcon = styled.img`
  position: fixed;
  bottom: 0;
  right: 10px;
  width: 106px;
  height: 103px;
  
`;

const BackgroundRightTexture = styled.img`
  width: 1253px;
  height: 100%;
  filter: grayscale(100%);
  mix-blend-mode: luminosity;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Laptop = styled.img`
  width: 552.03px;
  height: 319.77px;
  position: fixed;
  bottom: 355px; 
  right: 407px;
`;

const Phone = styled.img`
  width: 230;
  height: 350px;
  position: fixed;
  bottom: 290px;
  right: 175px;
  shadow: 7px 7px 10px rgba(0,0,0,0.5);
`;

const Caption = styled.div`
  width: 381px;
  height: 16px;
  font-family: SF Pro Text;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
  position: fixed;
  bottom: 330px;
  right: 420px;
`;


ReactDOM.render(
  <React.StrictMode>

  <Flexbox>
    <BackgroundLeft>
      <Icon src={require("./assets/Burnaby Central Icon.png")}></Icon>
      <App>
      </App>
    </BackgroundLeft>
      
    <BackgroundRight >
      <BackgroundRightTexture src={require("./assets/background.jpg")}></BackgroundRightTexture>
      <TransIcon src={require("./assets/Burnaby Central Trans Icon.png")}></TransIcon>
      <Laptop src={require("./assets/Laptop.png")}></Laptop>
      <Phone src={require("./assets/Phone.png")}></Phone>
      <Caption>Access the Burnaby Central Application through multiple devices.</Caption>
    </BackgroundRight>

  </Flexbox>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();