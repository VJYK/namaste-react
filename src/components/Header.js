import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

    const [loginButton,setButton]= useState('Login');
    return (<div className="header">
      <img
        className="logo"
        src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"
        alt="logo"
        width={100}
        height={100}
      />
      <div className="navbar-menu">
        <ul>
          <li> <Link to='/'> Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=> loginButton==='Login'?setButton('Logout'):setButton('Login')}>{loginButton}</button>
        </ul>
      </div>
    </div>)
  }

export  default HeaderComponent;