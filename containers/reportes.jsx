//External modules
import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

//Modules created
import * as TodoActions from '../actions/todos';
import VentaRow from '../components/VentaRow.jsx'

class VentaTable extends Component {
  constructor(props){
    super(props);
  }
  render(){
    //Almaceno es stor en un let
    let products = this.props.ventas
    let rows=[];
    if (products != null) {
      products.forEach((product)=>{
        rows.push(<VentaRow product={product} key={product.id} />);
      })
    }else{
      rows.push(<h1>LOADING</h1>)
    }
    const style = {
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <div>
        <Paper zDepth={5} style={style}>
          <Table
            selectable={false}
            multiSelectable={false}
            >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              >
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
      </Paper>
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
