import React, { Component } from 'react';
import { select, selectAll } from 'd3-selection';

const to_year_str = (num) => {
    return num < 0 ? -num + " BBY" : num + " ABY";
}

export default class Navigator extends Component {
    constructor() {
        super();
        this.state = {value: -22};

        this.slide = this.slide.bind(this);
    }

    slide(event) {
        this.props.set_gy(event.target.value);
        let newyear = event.target.value;
        this.setState({value: newyear});
        select("#year-text")
            .text(to_year_str(newyear));
    }

    render() {
        return(
            <div style={{textAlign: "center"}}>
                <div style={{padding: "2%"}}>
                    <img src={"../../data/logo/Star_Wars_logo-1.png"} style={{width: "20%"}} />
                </div>
                <input className="slider" type="range" min="-30" max="40" value={this.state.value} onChange={this.slide}/>
                <div id="year-text" className="display-year">{to_year_str(this.state.value)}</div>
            </div>
        );
    }
}
