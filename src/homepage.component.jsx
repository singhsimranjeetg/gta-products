import React from 'react';

import './homepage.styles.scss';

//homepage - whole window object 
//directory menu 

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <div className='directory-menu'>


      <div className='menu-item'>
        <div className='content'>
          <div className='title'>HATS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className='title'>JACKETS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className='title'>T-SHIRTS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className='title'>JEANS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className='title'>JOGGERS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className='title'>SHOES</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className='title'>WOMENS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className='title'>MENS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className='title'>KIDS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;