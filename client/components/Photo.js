import React from 'react';
import Input from './Input'


export default class MoonWindow extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      moonData: {},
    };
  }


  render(){
    return (
      this.props.body 
        ?
        <div className='moon-photo'>
          <h1>{this.props.body}</h1>
          <p>{this.props.date}</p>
          <p>{this.props.location}</p>
          <img src={'http://api.usno.navy.mil/imagery/' + this.props.body + '.png?&date=' + this.props.date + '&time=' + this.props.time} className='moonpic'/>
        </div>
        : null
    );
  }
}



