import React from 'react';
import Router from './router/router'
import { Provider } from 'mobx-react'
import stores from './store'
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'; 

function App() {
  return (
    <div className="App">
        <Provider {...stores}>
            <Router/>
        </Provider>
    </div>
  );
}

export default App;
