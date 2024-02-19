import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js';
import { AppContext } from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);
  return (
      <footer className='footer'>
        {user.isLoggedIn && <p><a href="https://github.com/Abubacer">Contact us</a></p>}
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
  );
}

export default Footer;
