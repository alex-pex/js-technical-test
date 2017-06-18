import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Hot reload app (requires Webpack or Browserify HMR to be enabled)
if (module.hot) {
  module.hot.accept('app', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
