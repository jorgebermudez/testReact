import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todos';

import VentaRow from '../components/VentaRow.jsx'


import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class VentaTable extends Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.ventas);
    console.log(products)
    let products = this.props.ventas
  /*  [
      {description: "SamsungGalaxi", price: "$49.99" , id:"1"},
      {description: "iphone", price: "$9.99" , id:"2"},
      {description: "asus sen phone", price: "$29.99", id:"3"},
      {description: "dist", price: "$99.99" , id:"4"},
      {description: "casa", price: "$399.99", id:"5"},
      {description: "perro", price: "$199.99" , id:"7"}
    ];*/

    let rows=[];

    if (products != null) {
      products.forEach((product)=>{
        rows.push(<VentaRow product={product} key={product.id} />);
      })
    }else{
      rows.push(<h1>LOADING</h1>)
    }
    console.log("This en table",this)

    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>description</TableHeaderColumn>
              <TableHeaderColumn>price</TableHeaderColumn>
              <TableHeaderColumn>id</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
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
)(VentaTable)
