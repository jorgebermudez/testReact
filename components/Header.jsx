import React, { PropTypes, Component } from 'react';

import FlatButton from 'material-ui/FlatButton';


const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {

  constructor(){
    super();
  };


  render() {
    return (
      <header className="header">
          <div>
            <FlatButton label="Ventas" />
            <FlatButton label="Pagos" primary={true} />
            <FlatButton label="Reporte" secondary={true} />
          </div>
       </header>
    );
  }
}



export default Header;
