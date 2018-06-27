import React, { Component } from 'react';
//import './Selector.css';

class Datadisplay extends Component {
    

    render() {
        return (
            <div>
                <h1>Data for {this.props.data.location}</h1>
                <h2>Temperature: {this.props.data.temperature}</h2>
                <div>Wind: {this.props.data.wind}</div>
            </div>
        );
    }
}

export default Datadisplay;