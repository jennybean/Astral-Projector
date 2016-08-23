import React from 'react';
import Inputs from './Input'

export default class Welcome extends React.Component{

  render(){
    return (
      <div className='moon-window'>
        <h1 className='title'>Astral Projector</h1>
        <Inputs />
      </div>
    );
  }
}
