import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
import './index.css';
import background from './assets/background.jpg';

const Flexbox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const BackgroundRight = styled.div`
  order: 2;
  width: auto;
  height: 30%;  // TODO: change size to fit <App> component
  z-index: -1;
  display: none;  // hide
  background-image: url(${background});

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    height: auto;
  }
`;

const BackgroundLeft = styled.div`
  background: white;

  @media only screen and (min-width: 768px) {
    width: 35%;
    height: auto;
  }
`;

const Icon = styled.img`
  display: block;

  @media only screen and (min-width: 768px) {
    width: 20%;
    height: auto;
    min-width: 85px;
    min-height: 85px;
    margin-top: 30%;
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

{/*
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
*/}

{/*
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
*/}

{/*
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
*/}

const Accessories = styled.img`
  z-index: 1;
  display: none;

  @media only screen and (min-width: 768px) {
    width: 54%;
    min-width: 410px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Caption = styled.div`
  font-family: SF Pro Text;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
  display: none;  // hide

  @media only screen and (min-width: 768px) {
    width: 320px;
    display: block;
    margin: 0 auto;
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
      <TransIcon src={require("./assets/Burnaby Central Trans Icon.png")}></TransIcon>
      {/*<Laptop src={require("./assets/Laptop.png")}></Laptop>
      <Phone src={require("./assets/Phone.png")}></Phone>*/}
      <div>
        <Accessories src={require("./assets/accessories.png")} />
        <Caption>Access the Burnaby Central Application through multiple devices.</Caption>
      </div>
    </BackgroundRight>

  </Flexbox>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
