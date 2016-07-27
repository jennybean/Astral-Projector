import React from 'react';
import Inputs from './Input'

export default class Welcome extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div className='moon-window'>
        <h1>Astral Projecter</h1>
        <p>🌕🌖🌗🌘🌑🌒🌓🌔 </p>
        <Inputs />
      </div>
    );
  }
}
