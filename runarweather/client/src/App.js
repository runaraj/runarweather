import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {users: []}
  url = "http://www.yr.no/place/Norway/Akershus/B%C3%A6rum/Skui/forecast_hour_by_hour.xml"

  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
    

    
  }


  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(data =>
          <div key={data}>{data}</div>
        )}
        <h2>{this.state.users}</h2>
      </div>
    );
  }
}

export default App;
