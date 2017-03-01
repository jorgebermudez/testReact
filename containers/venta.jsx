import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import * as TodoActions from '../actions/todos';

//import DialogComponent from '../components/DialogComp';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

class Venta extends Component {
  constructor(props) {
    super(props);
    this.state = {
        description: '',
        price: '',
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
    this.setState({description: ""});
    this.setState({price: ""});
  };

  handleClosePopUpAccept = () => {
    let AuxPrecio = "$" + this.state.price ;
    this.props.dispatch(TodoActions.addVenta(this.state.description,AuxPrecio));
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
    const style = {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      marginBottom: 10
    }
    const style2 = {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      marginBottom: 10
    }
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

        <form onSubmit={this.handleSubmit} style={style}>
          <Paper zDepth={2}>



            <TextField
                name="description"
                type="text"
                hintText="Descripcion"
                errorText={this.state.description_error_text}
                onChange={this.handleChange}
                value={this.state.description}
                style={style} underlineShow={false}
            /><Divider />
            <TextField
                type="number"
                hintText="Precio"
                name="price"
                onChange={this.handleChange}
                value={this.state.price}
                style={style} underlineShow={false}
            /><Divider />
          <input type="submit" value="Submit" style={style2} />
        </Paper>


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
