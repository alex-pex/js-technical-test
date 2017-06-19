import React from 'react';
import logo from './logo.svg';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <img src={logo} className={styles.headerLogo} alt='logo' />
    <h2>Welcome to React</h2>
  </div>
);

export default Header;
