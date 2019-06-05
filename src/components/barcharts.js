import {select, selectAll, event} from 'd3-selection';
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
    let fillColor = 'blue';
    let resist = false;
    switch(this.props.chartnum) {
    case '1':
      dataFile = 'data/phase1.csv';
      break;
    case '2':
      dataFile = 'data/phase1.csv';
      break;
    case '3':
      dataFile = 'data/imperial.csv';
      break;
    case '4':
      dataFile = 'data/firstorder.csv';
      break;
    case '1a':
      dataFile = 'data/CIS.csv';
      fillColor = 'red';
      break;
    case '2a':
      dataFile = 'data/CIS.csv';
      fillColor = 'red';
      break;
    case '3a':
      dataFile = 'data/rebel.csv';
      fillColor = 'red';
      break;
    case '4a':
      dataFile = 'data/resistance.csv';
      fillColor = 'red';
      resist = true;
      break;
    }
    csv(dataFile).then(data => {
      data.forEach(d => {
        d['Troop Size'] = Number(d['Troop Size'])
      })
      const width = 500;
      const height = 1000;
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
      let tooltip = select('body')
                    .append('div')
                    .style('position', 'absolute')
                    .style('display', 'none')
                    .style('background', 'none repeat scroll 0 0 #ffffff')
                    .style('min-width', '80px')
                    .style('height', '40px')
                    .style('border', '1px solid #6F257F')
                    .style('padding', '14px')
                    .style('color', 'black')
                    .style('text-align', 'center');

      barChart.selectAll('rect')
              .data(data)
              .enter().append('rect')
              .attr('x', (d, i) => xScale(i))
              .attr('width', () => {
                if(resist) {
                  return 100;
                }
                return xScale.bandwidth()
              })
              .attr('y', d => {
                if(resist) {
                  return 800;
                }
                return yScale(d['Troop Size'])
              })
              .attr('height', d => {
                if(resist) {
                  return height - 800
                }
                return height - yScale(d['Troop Size'])
              })
              .style('fill', fillColor)
              .on("mousemove", d => {
                tooltip.style("left", event.pageX - 50 + "px")
                       .style("top",  event.pageY - 70 + "px")
                       .style("display", "inline-block")
                       .html((d.Unit) + "<br>" + (d.Composition) +"<br>"+ (d['Troop Size'])+ " troops");
              })
              .on("mouseout", d =>
                tooltip.style('display', 'none')
              );
    })
  }
  render(){
    return(<div><svg id = {this.state.idstr}></svg></div>)
  }
}
