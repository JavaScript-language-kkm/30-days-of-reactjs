import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// var app = <h1>Hello, world</h1>
// var mountComponent = document.getElementById('root');
// var mountComponent = document.querySelector('#root');


// ReactDOM.render(app, mountComponent);

class App extends React.Component { 
  render() { 
    return <h1>Hello from our app</h1>
  }
}

var mount = document.querySelector('#root');
ReactDOM.render(<App />, mount);

serviceWorker.unregister();
