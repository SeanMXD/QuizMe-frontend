import React, { Component } from "react";

class Quip extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          data: {}
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/quips`)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .then(data => console.log(data));
    }

    render () {
        const {data} = this.state;
        return(
            <p style={{Color: "#c4c4c4"}}>{data.quip}</p>
        )
    }

    // fetchQuipData = () => {
    //   return fetch(`${process.env.REACT_APP_API_URL}/quips`)
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    // }    
};

export default Quip;


