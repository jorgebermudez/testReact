import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import * as TodoActions from '../actions/todos';

class Venta extends Component {
  constructor(props) {
    super(props);
    this.state = {
        description: '',
        price: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log("event", event)
    console.log("event.target.name", event.target.name)
    console.log("event.target.value", event.target.value)
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.description +"--"+ this.state.price);
    event.preventDefault();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
              type="text"
              hintText="Descripcion"
              name="description"
              onChange={this.handleChange.bind(this)}
          /><br/>
          <TextField
              type="text"  hintText="Precio"
              name="price"
              onChange={this.handleChange.bind(this)}
          /><br/>

          <input type="submit" value="Submit" /><br/>
        </form>
      </div>
    );
  }
}

// Mapea el State o store que con el proms
function mapStateToProps(state){
  return { ventas: state.ventas };
}
function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(TodoActions, dispatch)};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Venta)
