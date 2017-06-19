import React from 'react';
import styles from './Homepage.module.css';
import Header from 'app/components/Header';
import classnames from 'classnames';

const App = () => (
  <div className={styles.Homepage}>
    <Header />
    <div className={classnames('jumbotron', styles['App-intro'])}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </div>
  </div>
);

export default App;
