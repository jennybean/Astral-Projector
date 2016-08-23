import React from 'react';
import {fetchMoon} from '../models/inputs';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Photo from './Photo';
import MoonData from './MoonData';

export default class Inputs extends React.Component{

  constructor(props){
    super(props);

    this.enterPlanet = this.enterPlanet.bind(this);

    this.state = {
      error: null,
      date: null,
      location: null,
      time: null,
      moonData: null,
      body: null, 
      showWindow: false
    };
  }

 enterPlanet(planet){
    var date = this.state.date;
    var location = this.state.location;
    var time = this.state.time;

    this.setState({moonData: null});
    this.setState({body: planet});
    this.setState({showWindow: true});
 
    if(planet === 'moon'){      
      fetchMoon(date, location)
        .then((moonData) => {
          this.setState({moonData});
        });
    }
  }

  handleLocationInput(e){
    this.setState({location: e.currentTarget.value});
  }

  handleDateTime(e){

    var date = getDate(e.currentTarget.value);
    var time = getTime(e.currentTarget.value);

    this.setState({date});
    this.setState({time});
  }

  closer(){
    this.setState({showWindow: false});
  }

  render(){

    return (
      <div>

        <center><form className='center'>
          <span><label>When</label>
          <input 
            type="datetime-local" 
            id='date'
            name="date"
            onInput={this.handleDateTime.bind(this)}
          />
         
          <label>Where</label>
          <input 
            type="text"
            id='location'
            name="location"
            placeholder="Try 'Austin, TX'"            
            onInput={this.handleLocationInput.bind(this)}

          /></span>
        </form>

        <button type='submit' onClick={this.enterPlanet.bind(null, 'moon')}> See the Moon! ☾ </button>
        <button type='submit' onClick={this.enterPlanet.bind(null, 'mercury')}> See Mercury! ☿ </button>
        <button type='submit' onClick={this.enterPlanet.bind(null, 'venus')}> See Venus! ♀ </button>
        <button type='submit' onClick={this.enterPlanet.bind(null, 'mars')}> See Mars! ♂ </button>
        <button type='submit' onClick={this.enterPlanet.bind(null, 'jupiter')}> See Jupiter! ♃ </button></center>

        {this.state.showWindow ?
          <ModalContainer>
            <ModalDialog id="modal">
                <center><button type='submit' onClick={this.enterPlanet.bind(null, 'moon')}> ☾ </button>
                <button type='submit' onClick={this.enterPlanet.bind(null, 'mercury')}> ☿ </button>
                <button type='submit' onClick={this.enterPlanet.bind(null, 'venus')}> ♀ </button>
                <button type='submit' onClick={this.enterPlanet.bind(null, 'mars')}> ♂ </button>
                <button type='submit' onClick={this.enterPlanet.bind(null, 'jupiter')}> ♃ </button></center>
              <Photo body={this.state.body.body} moonData={this.state.moonData} date={this.state.date} time={this.state.time} body={this.state.body} location={this.state.location}/>
              <MoonData moonData={this.state.moonData} />
              <button onClick={this.closer.bind(this)}>Seach again</button>
            </ModalDialog>
          </ModalContainer>
        : null }
     
      </div>
    );
  }

}

// ============ Helper functions ============

function clearForm(){
  document.getElementById("date").value = null;
  document.getElementById("location").value = null;
}

function getDate(dateStr){
  var arr = dateStr.split('T');
  var date = arr[0].split("-");  
  return date[1]+ "/" + date[2]+ "/" + date[0]; 
}

function getTime(dateStr){
  console.log(dateStr)


  var arr = dateStr.split('T');
  return arr[1];
}