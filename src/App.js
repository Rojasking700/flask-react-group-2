import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  console.log("hello");
  return (
    <div className="App">
      <Navbar />
      <main>
        <switch>

        </switch>
      </main>
    </div>
  );
}

export default App;
