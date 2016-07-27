import React from 'react';
import {fetchMoon} from '../models/inputs';
import MoonWindow from './MoonWindow';
import Photo from './Photo';


export default class Inputs extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    	error: null,
      date: null,
      location: null,
      time: null,
    	moonData: null,
      body: null,
    };
  }

  enterMoonData(){
  	// clearForm();
    var date = this.state.date;
  	var location = this.state.location;
    var time = this.state.time;

    this.setState({body: 'moon'})
  	
  	fetchMoon(date, location)
      .then((moonData) => {
        this.setState({moonData});
        console.log('from state: moonData', this.state.moonData)
      });
  }

  enterMercury(){
    // clearForm();
    var date = this.state.date;
    var location = this.state.location;
    var time = this.state.time;

    this.setState({moonData: null})
    this.setState({body: 'mercury'})
  }

  enterVenus(){
    // clearForm();
    var date = this.state.date;
    var location = this.state.location;
    var time = this.state.time;

    this.setState({moonData: null})
    this.setState({body: 'venus'})
  }

  enterMars(){
    // clearForm();
    var date = this.state.date;
    var location = this.state.location;
    var time = this.state.time;

    this.setState({moonData: null})
    this.setState({body: 'mars'})
  }

  enterJupiter(){
    // clearForm();
    var date = this.state.date;
    var location = this.state.location;
    var time = this.state.time;

    this.setState({moonData: null})
    this.setState({body: 'jupiter'})
  }

  handleLocationInput(e){
    this.setState({location: e.currentTarget.value});
  }

  handleDateTime(e){
    var dt = e.currentTarget.value;

    var date = getDate(dt);
    var time = getTime(dt);

    this.setState({date});
    this.setState({time});

  }


  render(){
    return (
      <div>

      <form action="action_page.php">
        When
        <input 
          type="datetime-local" 
          id='date'
          name="date"
          placeholder ='Enter Date'
          onInput={this.handleDateTime.bind(this)}
        />
        Where
        <input 
          type="text"
          id='location'
          name="location"
          placeholder='Enter a City'
          onInput={this.handleLocationInput.bind(this)}

          />
      </form>

        <button type='submit' onClick={this.enterMoonData.bind(this)}> See the Moon! ☾ </button>
        <button type='submit' onClick={this.enterMercury.bind(this)}> See Mercury! ☿ </button>
        <button type='submit' onClick={this.enterVenus.bind(this)}> See Venus! ♀ </button>
        <button type='submit' onClick={this.enterMars.bind(this)}> See Mars! ♂ </button>
        <button type='submit' onClick={this.enterJupiter.bind(this)}> See Jupiter! ♃ </button>

        <Photo date={this.state.date} time={this.state.time} body={this.state.body} location={this.state.location}/>
        <MoonWindow moonData={this.state.moonData} />

  </div>
    );
  }

}

// Helper functions

function clearForm(){
  document.getElementById("date").value = null;
  document.getElementById("location").value = null;
  document.getElementById("time").value = null;
}

function getDate(dateStr){
  var arr = dateStr.split('T');
  var date = arr[0].split("-");  
  return date[1]+ "/" + date[2]+ "/" + date[0]; 
}

function getTime(dateStr){
  var arr = dateStr.split('T');
  return arr[1];
}