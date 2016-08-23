import React from 'react';
import Input from './Input'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

export default class Photo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      moonData: {},
    };
  }
  
  render(){
    
    return (
            <div>
              <div className='moon-photo'>
                <h1>{this.props.body}</h1>
                <p>in {this.props.location} on {this.props.date} at {this.props.time}</p>
                <img src={'http://api.usno.navy.mil/imagery/' + this.props.body + '.png?&date=' + this.props.date + '&time=' + this.props.time} />
              </div>
            </div>
    );
  }
}



