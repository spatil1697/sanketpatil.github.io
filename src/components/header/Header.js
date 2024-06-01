import React, { useState, useEffect } from 'react';
import "./header.css";
import HeaderSocials from './HeaderSocials';
import CTA from './CTA';
import "../../index.css";

const Header = () => {
  return (
    <header>
      <div className='site_header container header_container'>
        <h4 className='drop-in'>Hi, my name is </h4>
        <h1 className='custom_animation'>Sanket Patil</h1>
        <h5 className='text-light drop-in-2 header_text'>
          A Full Stack Developer actively looking for a new position. I like exploring new technologies and always strive to enhance my skills by developing various projects.
        </h5>
        <CTA />
        <HeaderSocials />
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
      <div className='site_header-mask'></div>
    </header>
  );
}

export default Header;