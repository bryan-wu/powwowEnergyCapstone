import React from 'react';
import ReactDOM from 'react-dom';
import HorizontalNav from './HorizontalNav';
import './index.css';

class LogIn extends React.Component {
  render() {
    return (
      <h1>Log In</h1>
      );
  }
}
// ========================================

ReactDOM.render(  <LogIn/>,document.getElementById('/Login')	);