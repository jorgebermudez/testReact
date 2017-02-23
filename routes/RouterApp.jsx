
import React, { PropTypes, Component } from 'react';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

//Clases del menu
import VentaTable from '../components/VentaTable';
import Venta from '../containers/venta';

export default class RouterApp extends Component {
  constructor(){
    super();
  }
  render(){
    const Reporte = () => (
      <div>
        <h2>Reporte</h2>
      </div>
    )
    return(
      <Router>
        <div>
          <div>
            <FlatButton containerElement={<Link to="/" />} label="Venta" />
            <FlatButton containerElement={<Link to="/ventas" />} label="Ventas" />
            <FlatButton containerElement={<Link to="/reporte" />} label="Reporte" />

          </div>

          <hr/>

          <Route exact path="/" component={Venta}/>
          <Route path="/ventas" component={VentaTable}/>
          <Route path="/reporte" component={Reporte}/>
        </div>
      </Router>
    );
  }
}
