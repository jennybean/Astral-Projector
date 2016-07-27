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
      this.props.moonData 
        ?
        <div className='moon-window'>
          <p>Day of the Week: {this.props.moonData.dayofweek}</p>
          <p>{this.props.moonData.curphase ? "Current Phase:" + this.props.moonData.curphase : null}</p>
          <p>Sunset: {this.props.moonData.sundata[3].time}</p>
        </div>
        : null
    );
  }
}



