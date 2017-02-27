
import React, { PropTypes, Component } from 'react';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

//Clases del menu

import VentaTable from '../containers/reportes'
import Venta from '../containers/venta';
import Pagos from '../containers/pagos';

export default class RouterApp extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <Router>
        <div>
          <div>
            <FlatButton containerElement={<Link to="/" />} label="Venta" />
            <FlatButton containerElement={<Link to="/pagos" />} label="Pagos" />
            <FlatButton containerElement={<Link to="/ventas" />} label="Reportes" />
          </div>
          <hr/>
          <Route exact path="/" component={Venta}/>
          <Route path="/ventas" component={VentaTable}/>
          <Route path="/pagos" component={Pagos}/>
        </div>
      </Router>
    );
  }
}
