import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';



class FormEdit extends Component{

  constructor(props){
    super(props);
    this.state = {
      edit: false,
      baseFirst: props.baseFirst,
      baseLast: props.baseLast,
      first: props.baseFirst,
      last: props.baseLast
    };
    // don't need bind when you use arrow functions
    //this.handleChange = this.handeChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);

  }


  edit =() =>{
    this.setState({edit:1});

  };

  cancel = () => {
    this.setState({edit:false});
  }

  handleChange = (event) =>{
    event.target.value =
      this.setState({ [event.target.name]: event.target.value});
    //need brackets for keyname
  }

  handleSubmit = (event) => {
    //prevent default prevents the refresh
    event.preventDefault();
    console.log(event.target);
    this.setState({baseFirst: this.state.first, baseLast:this.state.last, edit: false});
    //this.setState({baseFirst:event.target.first.value,baseLast:event.target.last.value,edit: false});
  }

  render(){
    if(this.state.edit){
      return(

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="first" value={this.state.first}  onChange={this.handleChange} />
          <input type="text" name="last" value={this.state.last}  onChange={this.handleChange} />
          <button id ="Cancel" onClick={this.cancel}> Cancel  </button>
          <input type = "submit" value = "Save"/>
          <h1> first: {this.state.first} </h1>
          <h1> baseFirst: {this.state.baseFirst} </h1>
        </form>
        /*
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="first" defaultValue={this.state.first} />
          <input type="text" name="last" defaultValue={this.state.last} />
          <button id ="Cancel" onClick={this.cancel}> Cancel  </button>
          <input type = "submit" value = "Save"/>
          <h1> first: {this.state.first} </h1>
          <h1> baseFirst: {this.state.baseFirst} </h1>
        </form>
*/

      );

    }else if(!this.state.edit){
      return(
        <div className = "form-edit">
          <div id = "first">First: {this.state.baseFirst} </div>
          <div id = "last"> Last: {this.state.baseLast}  </div>
          <button id ="edit" onClick={this.edit}> Edit </button>

        </div>
      );

    }
  }
}

FormEdit.propTypes = {
  baseFirst: PropTypes.string.isRequired,
  baseLast: PropTypes.string.isRequired
};
export default FormEdit;
