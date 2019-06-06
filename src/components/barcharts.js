import {select, selectAll, event} from 'd3-selection';
import {csv} from 'd3-fetch';
import React, { Component } from 'react';
import {scaleLinear, scaleBand, scalePow} from 'd3-scale';
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
      const height = 500;
      const width = 1000;
      const svg = select('#'+this.state.idstr)
                  .attr('height', height)
                  .attr('width', width);
      svg.append('rect').attr('width', width).attr('height', height).style('fill', 'rgba(3,0,77,0.4)');
      const barChart = svg.append('g')
                          .attr('height', height)
                          .attr('width', width)
                          //.attr('transform', 'translate(50,0)')
      const yScale = scaleBand()
                     .domain(data.map((d, i) => {
                       return i;
                     }))
                      .range([0, 500])
                      .padding([0.1]);
      console.log(max(data, d => d['Troop Size']))
      const xScale = scalePow()
                     .exponent(0.5)
                     .domain([1, max(data, d => d['Troop Size'])])
                     .range([width, 0])
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
              .attr('y', (d, i) => yScale(i))
              .attr('height', () => {
                return yScale.bandwidth()
              })
              .attr('x', d => {
                /*if(resist) {
                  return 800;
                }
                return xScale(d['Troop Size'])*/
                return 0;
              })
              .attr('width', d => {
                if(resist) {
                  return width - 800
                }
                return width - xScale(d['Troop Size'])
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
