import React from 'react'
import {TableRow, TableRowColumn} from 'material-ui/Table';


export default class ProductRow extends React.Component {
  constructor(){
    super();
  }
  render(){
    const { product } = this.props;
    return (
      <TableRow>
        <TableRowColumn>{ product.description }</TableRowColumn>
        <TableRowColumn>{ this.props.product.price }</TableRowColumn>
        <TableRowColumn>{ this.props.product.id }</TableRowColumn>

      </TableRow>
    );
  }
}
