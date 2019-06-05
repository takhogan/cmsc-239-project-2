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
        <h1>Stormtroopers throughout the Ages: A Star Wars Military History</h1>
        <Pages get_gy={this.get_gy}/>
        <Dead />
        <div className = "phase1" >
          <h2>The Clone Wars: Phase 1</h2>
          <ImageChart imagePaths={['../../data/phase_1/vehicles/im1.jpg',
            '../../data/phase_1/vehicles/im2.jpg',
            '../../data/phase_1/vehicles/im3.jpg']}/>
          {`This is Phase 1 ${longBlock}`}
          <h2>The Clone Wars: Phase 1</h2>
          <ImageChart imagePaths={['../../data/phase_1/special/commander.png',
            '../../data/phase_1/special/heavy.png',
            '../../data/phase_1/special/jet.png']}/>
          {`This is Phase 1 ${longBlock}`}
        </div>
        <div className = "phase2">
        <h2>The Clone Wars: Phase 2</h2>
          <ImageChart imagePaths={['../../data/phase_2/vehicles/im1.jpg',
            '../../data/phase_2/vehicles/im2.jpg',
            '../../data/phase_2/vehicles/im3.jpg']}/>
          {`This is Phase 2 ${longBlock}`}
          <h2>The Clone Wars: Phase 2</h2>
          <ImageChart imagePaths={['../../data/phase_2/special/fox.jpg',
            '../../data/phase_2/special/heavy.png',
            '../../data/phase_2/special/sniper.jpg']}/>
          {`This is Phase 2 ${longBlock}`}
        </div>
        <div className = "empire">
        <h2>The Galactic Empire</h2>
          <ImageChart imagePaths={['../../data/empire/vehicles/im1.jpg',
            '../../data/empire/vehicles/im2.jpg',
            '../../data/empire/vehicles/im3.jpg']}/>
          {`This is Empire ${longBlock}`}
          <h2>The Galactic Empire</h2>
          <ImageChart imagePaths={['../../data/empire/special/commander.png',
            '../../data/empire/special/magma.png',
            '../../data/empire/special/sniper.png']}/>
          {`This is Empire ${longBlock}`}
        </div>
        <div className = "FO">
          <h2>The First Order</h2>
          <ImageChart imagePaths={['../../data/first_order/vehicles/im1.jpg',
            '../../data/first_order/vehicles/im2.jpg',
            '../../data/first_order/vehicles/im3.jpg']}/>
          {`This is First Order ${longBlock}`}
          <h2>The First Order</h2>
          <ImageChart imagePaths={['../../data/first_order/special/flame.jpg',
            '../../data/first_order/special/riot.jpg',
            '../../data/first_order/special/rocket.jpg']}/>
          {`This is First Order ${longBlock}`}
        </div>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
