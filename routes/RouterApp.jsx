
import React, { PropTypes, Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

//Clases del menu
import VentaTable from '../components/VentaTable';




export default class RouterApp extends Component {
  constructor(){
    super();
  }



  render(){
    const Home = () => (
      <div>
        <h2>Home</h2>
      </div>
    )

    const About = () => (
      <div>
        <h2>About</h2>
      </div>
    )
    return(
      <Router>
        <div>
          <div>
            <FlatButton containerElement={<Link to="/" />} label="Home" />
            <FlatButton containerElement={<Link to="/Ventas" />} label="Ventas" />
            <FlatButton containerElement={<Link to="/About" />} label="About" />

          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ventas">Ventas</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route exact path="/ventas" component={VentaTable}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}
