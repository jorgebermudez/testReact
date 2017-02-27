import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import * as TodoActions from '../actions/todos';

//import DialogComponent from '../components/DialogComp';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Pago extends Component {
  constructor(props) {
    super(props);
    this.state = {
        description: '',
        price: '',
        open:false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Popup butons actions
  handleClosePopUpCancel = () => {
    this.setState({open: false});
    this.setState({description: ""});
    this.setState({price: ""});
    console.log(this);
  };

  handleClosePopUpAccept = () => {
    let AuxPrecio = "$(" + this.state.price + ")";
    this.props.dispatch(TodoActions.addVenta(this.state.description, AuxPrecio ));
    this.setState({open: false});
    this.setState({description: ""});
    this.setState({price: ""});
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
              type="text"
              hintText="Descripcion"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
          /><br/>
          <TextField
              type="number"  hintText="Precio"
              name="price"
              onChange={this.handleChange}
              value={this.state.price}
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
)(Pago)
