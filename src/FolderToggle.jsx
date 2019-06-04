import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

class FolderToggle extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible: true
    };
  }

  render(){
    if(this.state.visible){
      return(
        <div>
          <button onClick={
            ()=>this.setState({visible: !this.state.visible})
          }> toggle </button>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>

      );
    }
    else{
      return(
        <div>
          <button onClick={
            ()=>this.setState({visible: !this.state.visible})
          }> toggle </button>
        </div>

      );
    }
  }

}
export default FolderToggle;
