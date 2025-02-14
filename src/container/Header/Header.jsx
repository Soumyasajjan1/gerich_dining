import React from 'react';

import './Header.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Eat, drink, and vibe with us—your perfect night starts here. Where great food meets even better drinks. Cheers to good times!</p>
      <button className='custom__button' type='button'>Explore Menu</button>    
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>

);

export default Header;
