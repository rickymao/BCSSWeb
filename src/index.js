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

const Background = styled.div`

background: red;
flex: 1;
height: 100%;

`;

const Background2 = styled.div`

background: white;
flex-basis: 34.73%;
height: 100%;

`;

ReactDOM.render(
  <React.StrictMode>

  <Flexbox>
  <Background2>
  <App />
  </Background2>

  <Background />

  </Flexbox>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
