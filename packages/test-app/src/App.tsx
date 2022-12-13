import React from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import { Button, Text } from "@perfios/components";

const App = () => (
  <div className={styles.App}>
    <header className={styles['App-header']}>
      <img src={logo} className={styles['App-logo']} alt="logo" />
      <p>
        Siva Test App
        and save to reload.
      </p>
      <a
        className={styles['App-link']}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text lable="Your count is" />
      </a>
    </header>
  </div>
);

export default App;
