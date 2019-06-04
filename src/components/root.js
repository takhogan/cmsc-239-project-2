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
    // const test = require('');
    super();
    this.state = {
      data: null,
      loading: true,
      globalyear: -22
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
  }

  get_gy() {
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
        <div>{`The example data was loaded! There are ${data.length} rows`}</div>
        <Pages get_gy={this.get_gy}/>
        <Dead />
        <div id = "phase1">
          <ImageChart imagePaths={['../../data/phase_1/im1.jpg',
            '../../data/phase_1/im2.jpg',
            '../../data/phase_1/im3.jpg']}/>
          {`This is Phase 1 ${longBlock}`}
        </div>
        <div id = "phase2">
          <ImageChart imagePaths={['../../data/phase_2/im1.jpg',
            '../../data/phase_2/im2.jpg',
            '../../data/phase_2/im3.jpg']}/>
          {`This is Phase 2 ${longBlock}`}
        </div>
        <div id = "empire">
          <ImageChart imagePaths={['../../data/storm_trooper/im1.jpg',
            '../../data/storm_trooper/im2.jpg',
            '../../data/storm_trooper/im3.jpg']}/>
          {`This is Empire ${longBlock}`}
        </div>
        <div id = "FO">
          <ImageChart imagePaths={['../../data/first_order/im1.jpg',
            '../../data/first_order/im2.jpg',
            '../../data/first_order/im3.jpg']}/>
          {`This is First Order ${longBlock}`}
        </div>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
