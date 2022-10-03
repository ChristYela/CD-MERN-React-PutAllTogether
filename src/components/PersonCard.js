import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
            this.state = {
                bdayCounter: this.props.age
            };
        }

    increaseCounter = () => {
        this.setState({
            bdayCounter:this.state.bdayCounter + 1
        })
    }

    render(){
        const {lastName, firstName, hairColor} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h5>Age: {this.state.bdayCounter}</h5>
                <h5>Hair Color: {hairColor}</h5>
                <button onClick={this.increaseCounter} className="btn btn-info">Birthday Button for {this.props.firstName} {this.props.lastName}</button>
                <br />
                <hr />
            </div>
        );
    }
}

export default PersonCard;
