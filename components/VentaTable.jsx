import React, { PropTypes, Component } from 'react';

import VentaRow from './VentaRow.jsx'


import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class VentaTable extends Component {
  constructor(props){
    super(props);
    //form
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    products.push({description: "SamsungGalaxi", price: "$49.99" , id:"1"})
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render(){


    let products =
    [
      {description: "SamsungGalaxi", price: "$49.99" , id:"1"},
      {description: "iphone", price: "$9.99" , id:"2"},
      {description: "asus sen phone", price: "$29.99", id:"3"},
      {description: "dist", price: "$99.99" , id:"4"},
      {description: "casa", price: "$399.99", id:"5"},
      {description: "perro", price: "$199.99" , id:"7"}
    ];

    let rows=[];


    if (products != null) {
      products.forEach((product)=>{
        rows.push(<VentaRow product={product} key={product.id} />);
      })
    }else{
      rows.push(<h1>LOADING</h1>)
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
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
