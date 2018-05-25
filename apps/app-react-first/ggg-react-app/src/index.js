// https://code.visualstudio.com/docs/nodejs/reactjs-tutorial
// shortcuts
// Ctrl+Shift+X => Extensions view  
// Ctrl+Shift+E => Files Editor
// Ctrl+Shift+D => Debug view
// Ctrl+Shift+M => Problems (Linters)
// Ctrl+Shift+P => Command Palette
//import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import registerServiceWorker from './registerServiceWorker';
//=============================================================================
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
//=============================================================================
