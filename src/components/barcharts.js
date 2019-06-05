import {select, selectAll} from 'd3-selection';
import {csv} from 'd3-fetch';
import React, { Component } from 'react';
import {scaleLinear, scaleBand} from 'd3-scale';
import {max} from 'd3-array';

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
      data.forEach(d => {
        d['Troop Size'] = Number(d['Troop Size'])
      })
      const width = 500;
      const height = 200;
      const svg = select('#'+this.state.idstr)
                  .attr('height', height)
                  .attr('width', width);
      svg.append('rect').attr('width', width).attr('height', height).style('fill', 'white');
      const barChart = svg.append('g')
                          .attr('width', 450)
                          .attr('height', height)
                          .attr('transform', 'translate(50,0)')
      const xScale = scaleBand()
                     .domain(data.map((d, i) => {
                       return i;
                     }))
                      .range([0, 450])
                      .padding([0.1]);
      console.log(max(data, d => d['Troop Size']))
      const yScale = scaleLinear()
                     .domain([0, max(data, d => d['Troop Size'])])
                     .range([height, 0])
      barChart.selectAll('rect')
              .data(data)
              .enter().append('rect')
              .attr('x', (d, i) => xScale(i))
              .attr('width', xScale.bandwidth())
              .attr('y', d => yScale(d['Troop Size']))
              .attr('height', d => height - yScale(d['Troop Size']))
              .style('fill', 'blue');
      console.log(data)
    })
  }
  render(){
    return(<div><svg id = {this.state.idstr}></svg></div>)
  }
}
