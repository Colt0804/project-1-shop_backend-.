import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
      />
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text" />
        <SearchIcon
          className="header__searchIcon" />
        {/* logo */}

      </div>
      <div className="header__nav">
        <div className="header__option">
          <span
            className='header__optionLineOne'>Hello Guest</span>
          <span
            className='header__optionLineTwo'>Sign In</span>

        </div>
        <div className="header__option">
          <span
            className='header__optionLineOne'>Return</span>
          <span
            className='header__optionLineTwo'>& order</span>

        </div>
        <div className="header__option">
          <span
            className='header__optionLineOne'>Your </span>
          <span
            className='header__optionLineTwo'>Prime</span>

        </div>
      </div>
    </div>

  );
}

export default Header
