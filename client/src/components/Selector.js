import React, { Component } from 'react';
//import './Selector.css';
import Datadisplay from './Datadisplay';

class Selector extends Component {
    constructor(props) {
        super (props);
        this.state = {selected: 'sandnes', temperature: null, wind: "", location: ""}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        console.log("Selector mounted");
    }

    handleChange(event) {
        // console.log(event.target.value);
        this.setState({selected: event.target.value})
    }
    handleSubmit(event) {
        //get data
        // console.log("Get data for: " + this.state.location);
        this.setState({location: this.state.selected});
        this.update();
        event.preventDefault();
    }

    update() {
        fetch('/api/'+this.state.selected)
            .then(res => res.json())
            .then(data => {
                var comp = data.weatherdata.forecast.tabular.time[0];
                this.setState({temperature: comp.temperature._attributes.value, wind: comp.windSpeed._attributes.name});
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>I am selector man
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="sandnes">Sandnes</option>
                        <option value="stavanger">Stavanger</option>
                        <option value="haugesund">Haugesund</option>
                        <option value="sauda">Sauda</option>
                    </select>
                </label>
                <input type="submit" value="Get data"/>
                <div>{this.state.value}</div>
                <Datadisplay data={this.state}/>
            </form>

        );
    }
}

export default Selector;