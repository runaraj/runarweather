import React, { Component } from 'react';
import './App.css';
import Selector from './components/Selector';
import Datadisplay from './components/Datadisplay';

class App extends Component {
  state = {users: []}
  url = "https://cors-anywhere.herokuapp.com/https://www.yr.no/place/Norway/Akershus/B%C3%A6rum/Sandvika/forecast_hour_by_hour.xml"
  parseString = require('react-native-xml2js').parseString;

  componentDidMount() {
/*     fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users })); */


      fetch(this.url)
        .then(response => response.text())
        .then((response) => {
          let out;
          this.parseString(response, function(err, result) {
            out = result.weatherdata.forecast[0].tabular[0].time[0].temperature[0].$.value
          })
          this.setState({temperature: out});
        })
        .catch((err) => {
            console.log('fetch', err)
        })

      
  }

  render() {
    return (
      <div className="App">
        <h1>Temperature</h1>
        <div>{this.state.temperature}</div>
        <Datadisplay/>
        <Selector/>
      </div>
    );
  }
}

export default App;
