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
  order: 2;
  width: auto;
  height: 30%;  // TODO: change size to fit <App> component
  z-index: -1;
  align-items: center;
  justify-content: center;
  display: none;  // hide

  @media only screen and (min-width: 768px) {
    display: flex;
    width: 65%;
    height: auto;
  }
`;

const BackgroundLeft = styled.div`
  background: white;
  order: 1;

  @media only screen and (min-width: 768px) {
    width: 35%;
    height: 100%;
  }
`;

const Icon = styled.img`
  display: block;

  @media only screen and (min-width: 768px) {
    width: 20%;
    height: auto;
    min-width: 85px;
    min-height: 85px;
    margin-top: 96px;  // TODO: consider switching to relative distance from top?
    margin-left: auto;
    margin-right: auto;
  }
`;

const TransIcon = styled.img`
  z-index: 0;
  display: none;  // hide

  @media only screen and (min-width: 768px) {
    width: 106px;
    height: 106px;
    position: absolute;
    bottom: 0;
    right: 10px;
    display: block;
  }
`;

const BackgroundRightTexture = styled.img`
  filter: grayscale(100%);
  mix-blend-mode: luminosity;
  border: 1px solid black;
  box-sizing: border-box;
  z-index: -1;
  display: none;  // hide

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    right: 0;
    position: absolute;
    display: block;
  }
`;

const Laptop = styled.img`
  z-index: 1;
  order: 0;
  display: none;  // hide

  @media only screen and (min-width: 768px) {
    width: 45%;
    min-width: 300px;
    height: auto;
    position: relative;
    padding-bottom: 40px;
    display: block;
  }
`;

const Phone = styled.img`
  shadow: 7px 7px 10px rgba(0,0,0,0.5);
  z-index: 1;
  order: 1;
  display: none;  // hide

  @media only screen and (min-width: 768px) {
    width: 30%;
    min-width: 200px;
    height: auto;
    position: relative;
    padding-bottom: 40px;
    display: block;
  }
`;

const Caption = styled.div`
  font-family: SF Pro Text;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
  display: none;  // hide

  @media only screen and (min-width: 768px) {
    position: absolute;
    padding-top: 250px;
    width: 320px;
    height: auto;
    display: block;
  }
`;


ReactDOM.render(
  <React.StrictMode>

  <Flexbox>
    <BackgroundLeft>
      <Icon src={require("./assets/Burnaby Central Icon.png")}></Icon>
      <App>
      </App>
    </BackgroundLeft>
      
    <BackgroundRight>
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
