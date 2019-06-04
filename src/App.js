import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import FormEdit from './FormEdit.jsx';
import FolderToggle from './FolderToggle.jsx';
import './App.css';

class App extends Component {
  render(){
    return (<div>
            <FormEdit baseFirst ="jasper" baseLast= "cheung"/>
            <FolderToggle/>
            </div>);

  }
}

export default App;
