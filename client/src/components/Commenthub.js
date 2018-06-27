import React, { Component } from 'react';
//import './Selector.css';

class Selector extends Component {
    constructor(props) {
        super (props);
        this.state = {comments: []};

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        console.log("Commenthub mounted");
        //Maybe load in previous comments here?
    }

    validateComment(comment){
        if (this.state.comments.indexOf(comment) === -1){
            return true
        }
        alert("No spam please");
        return false

    }


    handleSubmit(event) {
        let new_comment = event.target.commentfield.value
        if (this.validateComment(new_comment)){
            let today = new Date().toLocaleString();
            this.setState({comments: this.state.comments.concat([new_comment + " : " + today]) });
        }
        event.preventDefault();

    }

    render() {

        let commentList = this.state.comments.map((items) => 
            <li key={items}>{items}</li>
        );
        return (
            <div>
                <form onSubmit={this.handleSubmit}><p>Comments:</p>
                    <label>
                        <input type="text" name="commentfield"/>
                    </label>
                    <input type="submit" value="Submit comment"/>
                </form>
                <ul>{commentList}</ul>
            </div>

        );
    }
}

export default Selector;