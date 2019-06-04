import {select, selectAll} from 'd3-selection';
import {csv} from 'd3-fetch';
import React, { Component } from 'react';

export default class BarChart extends Component {
  constructor(props){
    super(props);
    this.state = { idstr: "chart" + this.props.chartnum };
  }
  componentDidMount() {
    let dataFile = "";
    switch(this.props.chartnum) {
      case "1":
        dataFile = 'data/phase1.csv';
        break
    }
    csv(dataFile).then(data => {
      const width = 300;
      const height = 500;
      const svg = select('#'+this.state.idstr)
                  .attr('height', height)
                  .attr('width', width)
                  .attr('fill', 'white');
      console.log(data)
    })
  }
  render(){
    return(<div><svg id = {this.state.idstr}></svg></div>)
  }
}
