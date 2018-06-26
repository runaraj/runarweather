import React, { Component } from 'react';
//import './Selector.css';

class Selector extends Component {
    constructor(props) {
        super (props);
        this.state = {value: 'sandnes'}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        console.log("Selector state: " + this.state.value);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({value: event.target.value})
    }
    handleSubmit(event) {
        //get data
        console.log("Get data for: " + this.state.value);
        
        event.preventDefault();
    }




    render() {
        return (
            <form onSubmit={this.handleSubmit}>I am selector man
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="sandnes">Sandnes</option>
                        <option value="stavanger">Stavanger</option>
                        <option value="haugesund">Haugesund</option>
                        <option value="egersund">Egersund</option>
                        <option value="sauda">Sauda</option>
                    </select>
                </label>
                <input type="submit" value="Get data"/>
                <div>{this.state.value}</div>
            </form>

        );
    }
}

export default Selector;