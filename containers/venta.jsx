import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import * as TodoActions from '../actions/todos';

//import DialogComponent from '../components/DialogComp';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Venta extends Component {
  constructor(props) {
    super(props);
    this.state = {
        description: '',
        price: '',
        count: 83,
        open: false, // para popup
        description_error_text: null,
        price_error_text: null
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  // manejo de dialog
  handleClosePopUpCancel = () => {
    this.setState({open: false});
    console.log(this);
  };

  handleClosePopUpAccept = () => {
    let AuxPrecio = "$" + this.state.price ;
    this.props.dispatch(TodoActions.addVenta(this.state.description,AuxPrecio));
    this.setState({open: false});
  };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({open: true});
  }

  render(){
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClosePopUpCancel}
      />,
      <FlatButton
        label="Agregar"
        primary={true}
        onTouchTap={this.handleClosePopUpAccept}
      />
    ];
    return(
      <div>
          <Dialog
            title="Aceptar Venta"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
            Seguro que quire acentar el pago de $ {this.state.price} por una {this.state.description} .
          </Dialog>
        <form onSubmit={this.handleSubmit}>
          <TextField
              name="description"
              type="text"
              hintText="Descripcion"
              errorText={this.state.description_error_text}
              onChange={this.handleChange}
          /><br/>
          <TextField
              type="text"
              hintText="Precio"
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
