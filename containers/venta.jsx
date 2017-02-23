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
        price: '',
        count: 83
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(TodoActions.addVenta(this.state.description,this.state.price));
    alert('Se vendio : ' + this.state.description +" a un costo de "+ this.state.price);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
              type="text"
              hintText="Descripcion"
              name="description"
              onChange={this.handleChange}
          /><br/>
          <TextField
              type="text"  hintText="Precio"
              name="price"
              onChange={this.handleChange}
          /><br/>

          <input type="submit" value="Submit" /><br/>
        </form>
      </div>
    );
  }
}

// Mapea el State o store que con el props
function mapStateToProps(state){
  return { ventas: state.ventas };
}
/*
function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(addVenta, dispatch)};
}*/
export default connect(
  mapStateToProps,
//  mapDispatchToProps
)(Venta)
