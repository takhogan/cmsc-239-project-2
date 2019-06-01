import React from 'react';
import {csv} from 'd3-fetch';
import ExampleChart from './example-chart';
import ImageChart from './image-chart.js';

const longBlock = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

class RootComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: true
    };
  }

  componentWillMount() {
    csv('data/sample-data.csv')
      .then(data => {
        this.setState({
          data,
          loading: false
        });
      });
  }

  render() {
    const {loading, data} = this.state;
    if (loading) {
      return <h1>LOADING</h1>;
    }
    return (
      <div className="relative">
        <h1> Hello Explainable!</h1>
        <ImageChart imagePaths={['../../data/ship_images/pirate_ship.jpg',
          '../../data/ship_images/red_pirate.jpg',
          '../../data/ship_images/white_pirate.jpg']}/>
        <div>{`The example data was loaded! There are ${data.length} rows`}</div>
        <ExampleChart data={data}/>
        <div>{longBlock}</div>
        <ExampleChart data={data}/>
        <div>{longBlock}</div>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
