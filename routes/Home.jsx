import {React, Componet} from 'react'
import {Link} from 'react-router'

export default class Home extends Component{
  constructor(){

  }
  render(){
    return(
      <div>
        <h1>HOME</h1>
        <Link to="store"> Store </Link>
        </Link>
      </div>
    )
  }
}
