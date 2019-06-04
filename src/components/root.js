import React from 'react';
import {csv} from 'd3-fetch';
import ExampleChart from './example-chart';
import ImageChart from './image-chart.js';
import Navigator from './time-navigator';
import Dead from './dead-page';
import Pages from './page-switcher';
import { timingSafeEqual } from 'crypto';

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
      loading: true,
      globalyear: 0
    };

    this.set_gy = this.set_gy.bind(this);
    this.get_gy = this.get_gy.bind(this);
  }

  set_gy(val) {
    this.setState({
      data: this.state.data,
      loading: this.state.loading,
      globalyear: val
    });
    console.log(`Set GY ${this.state.globalyear}!`);
  }

  get_gy() {
    console.log("Get GY!");
    return this.state.globalyear;
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
      <div className="relative" style={{textAlign: 'center'}}>
        <Navigator set_gy = {this.set_gy} />
        <h1> Hello Explainable!</h1>
        <ImageChart imagePaths={['../../data/ship_images/pirate_ship.jpg',
          '../../data/ship_images/red_pirate.jpg',
          '../../data/ship_images/white_pirate.jpg']}/>
        <div>{`The example data was loaded! There are ${data.length} rows`}</div>
        <Pages get_gy={this.get_gy}/>
        <Dead />
        <div id="phase1">{`This is Phase 1 ${longBlock}`}</div>
        <div id="phase2">{`This is Phase 2 ${longBlock}`}</div>
        <div id="empire">{`This is Empire ${longBlock}`}</div>
        <div id="FO">{`This is First Order ${longBlock}`}</div>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
