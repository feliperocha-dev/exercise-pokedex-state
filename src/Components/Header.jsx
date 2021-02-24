import React, { Component } from 'react';
import Logo from '../Logo.png';

class Header extends Component {
  render () {
    return (
      <header>
        <img src={Logo} alt='Pokemon Logo' className='logo'></img>
      </header>
    )
  };
};

export default Header;