import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component1 } from './component1';
import { DraftArea } from './DraftArea';
import MyComponent from './MyComponent';
import { Route, Routes } from 'react-router-dom';
import { MainArea } from './MainArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit  <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <DraftArea/>
        <MyComponent/> */}


         {/* Define your routes here */}
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/main" element={<MainArea />} />
        <Route path="/draft" element={<DraftArea />} />

      </Routes>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
