import React from 'react';
import {csv} from 'd3-fetch';
import ExampleChart from './example-chart';
import ImageChart from './image-chart.js';
import Navigator from './time-navigator';
import Dead from './dead-page';
import Pages from './page-switcher';
import BarChart from './barcharts';
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
        <a name="Top" />
        <Navigator set_gy = {this.set_gy} />
        <h1>Stormtroopers throughout the Ages: A Star Wars Military History</h1>
        <Pages get_gy={this.get_gy}/>
        <Dead />
        <div className = "phase1" >
          <h2>The Clone Wars: Phase 1</h2>
          <img src="../../data/phase_1/cover.png" style={{height: 300}} />
          <h3> Overview </h3>
          {'Clone troopers were the main soldiers used by the Grand Army of the Republic during the Clone Wars right before the rise of the Empire. Although outnumbered by the droid armies of the Confederacy of Independent Systems in most battles, the advantage of the clone troops lay in their ability to think creatively in battle, while also being genetically predisposed to follow orders. The Phase 1 clone troopers were the first set of clone troopers introduced to the Republic at the Battle of Geonosis, which marked the beginning of the Clone Wars conflict. Phase 1 troops had body armor most similar to that of their Mandalorian prime, Jango Fett.'}
          <hr style={{border: "2px solid yellow"}}/>
          <h3> Vehicles Used </h3>
          <ImageChart imagePaths={['../../data/phase_1/vehicles/im1.jpg',
            '../../data/phase_1/vehicles/im2.jpg',
            '../../data/phase_1/vehicles/im3.jpg']}/>
          <h5> Use the left and right arrows to toggle back and forth between images </h5>
          <h4> Acclamator-class assault ship </h4>
          {'The Acclamator-class assault ship was the main ship used for intragalactic troop transport in the early stages of the Clone Wars. Measuring three quarters of a kilometer in length and nearly half a kilometer across, the ship could carry up to 16,000 clone troopers and support personnel, as well as a full complement of LAAT gunships, and ATTE vehicles as well.'}
          <h4> Low Altitude Assault Transport/infantry (LAAT/i) </h4>
          {'The LAAT/i was the main gunship used by the Republic for aerial support and troop transport on the battlefield. It was loaded with short range homing missiles with high powered artillery designed to take out enemy vehicles and troops on the ground. Each gunship could carry almost a full platoon as well, and were used for tactical insertions when larger transport ships could not land.'}
          <h4> All Terrain Tactical Enforcer (ATTE)</h4>
          {'First used in the Battle of Geonosis, the ATTE was one of the Republic’s tank vehicles, designed both for assault of enemy installations as well as troop transport on the ground. Each tank could take a full platoon of troops, and was heavily armored with high powered cannons designed to pierce the armor of enemy ground-based vehicles.'}
          <h3> Special Units</h3>
          <ImageChart imagePaths={['../../data/phase_1/special/commander.png',
            '../../data/phase_1/special/heavy.png',
            '../../data/phase_1/special/jet.png']}/>
          <h5> Use the left and right arrows to toggle back and forth between images </h5>
          <h4> Clone Commanders </h4>
          {'Clone Commanders were the leaders of clone regiments. They were tasked with leading their troops in battle and offered tactical advice to their Jedi generals. Each corps of the army had 16 clone commanders, all or some of whom were commanded by a single Jedi general.'}
          <h4> Clone heavy troopers </h4>
          {'Clone Heavy Troopers were specialists in using heavy weapons like portable missile launchers. These troops were used to handle anti-vehicle and anti-armor tactical missions in their regiments. They were part of the elite forces.'}
          <h4> Clone jet troopers </h4>
          {'Successors of the Republic rocket-jumpers of previous conflicts, clone jet troopers were some of the leading members in republic tactical teams. Using their jet packs to cover large distances quickly, have aerial advantages and increased agility, they were used most effectively in special operations missions.'}
          <h3> Military makeup of the Army </h3>
          <BarChart chartnum = "1"/>
          {'The above chart shows the break down of Clone military units. Hover over each bar to see the unit name, what it was comprised of, and how many troops there were.'}
          <h4> Opposing forces </h4>
          <BarChart chartnum = "1a"/>
          {'The main oponents of the Republic were the droid armies of the Confederacy of Independent Systems. The above chart shows the break down of droid military units. Hover over each bar to see the unit name, what it was comprised of, and how many troops there were.'}
          <h1/>
          <a href="#Top">Back to top</a>
        </div>
        <div className = "phase2">
          <h2>The Clone Wars: Phase 2</h2>
          <img src="../../data/phase_2/cover.png" style={{height: 300}} />
          <h3> Overview </h3>
          {'Phase 2 clone troopers refers both to the change in armor, as well as the fresh troops provided with the new armor from Kamino. Phase 2 clone armor distinguished itself from Phase 1 in that it was designed to better suit human bodies and supported more specialized equipment. Different from Phase 1, Phase 2 armor also did not have an internal life support system, so respirators had to be attached when there was no breathable air. Phase 2 armor replaced Phase 1 some time around the Battle of Ryloth, and was the armor used by the clones when executing Order 66 of the Jedi Purge.'}
          <hr style={{border: "2px solid yellow"}}/>
          <h3> Vehicles Used </h3>
          <ImageChart imagePaths={['../../data/phase_2/vehicles/im1.jpg',
            '../../data/phase_2/vehicles/im2.jpg',
            '../../data/phase_2/vehicles/im3.jpg']}/>
          <h5> Use the left and right arrows to toggle back and forth between images </h5>
          <h4> Venator Class Star Destroyer </h4>
          {'The Venator-class Star Destroyer was a Republic attack cruiser that replaced the Acclamator-class cruiser as the main intragalactic troop transport carrier and assault ship early on in the Clone Wars. Much larger than the Acclamator, it measured well over a kilometer in length, and over half a kilometer in width. However, much of its increased size mostly went toward its arsenal and the shift itself could only carry about 2,000 troops in addition to its 7,400 man crew. '}
          <h4> ARC-170 Starfighter </h4>
          {'The ARC-170 Starfighter was a multi-faceted heavy duty starfighter. Crewed by 3 clones, the ARC-170 contained a hyperdrive, allowing it to be used in both space battles as well as long range missions. Its heavy armament allowed for it to be used as a tactical ship, bomber, and dogfighter as well.'}
          <h4> TX-130 Saber class tank </h4>
          {'The TX-130 Saber-class tank was a highly maneuverable, fast attack tank. It was equipped with twin laser cannons, concussion missiles, and a beam turret on top. The ability for quick boosts of speed allowed for this tank to be used in quick skirmishes for tactical support, and then slip away.'}
          {`This is Phase 2 ${longBlock}`}
          <h3> Special Units</h3>
          <ImageChart imagePaths={['../../data/phase_2/special/fox.jpg',
            '../../data/phase_2/special/clone_shock.jpg',
            '../../data/phase_2/special/sniper.jpg']}/>
          <h5> Use the left and right arrows to toggle back and forth between images </h5>
          <h4> ARC Troopers </h4>
          {'Advanced Recon Commandos, or ARC troopers, were the elite troops of the Grand Army of the Republic. Trained for the most difficult missions, ARC troopers specialized in command and special operations. Their tactical skills and ability to think more independently than the normal clone trooper gave them a key advantage in dangerous missions.'}
          <h4> Shock Troopers </h4>
          {'Shocktroopers were an elite force of clone that served as the troops of the Coruscant guard. Bred secretly and apart from the other clones, shocktroopers specialized in operations in urban areas. They were mostly used as a security force on Coruscant, and for riot control. Towards the end of the Clone Wars after Palpatine transformed the Republic into the Empire, they served as the imperial bodyguards for a brief time as well.'}
          <h4> Clone sharpshooters </h4>
          {'Clone Sharpshooters were a specialized variant of the standard clone trooper in the Republic’s army. Since clones were bred to have the same eyesight, accuracy and steadiness of hand, the difference between the sharpshooters and regular clone troopers lay in their training. Clone snipers were given special training in flash training in order to teach them to be better snipers.'}
          <h3> Military makeup of the Army </h3>
          <BarChart chartnum = "2"/>
          {'The above chart shows the break down of Clone military units. Hover over each bar to see the unit name, what it was comprised of, and how many troops there were.'}
          <h4> Opposing forces </h4>
          <BarChart chartnum = "2a"/>
          {'The main oponents of the Republic were the droid armies of the Confederacy of Independent Systems. The above chart shows the break down of droid military units. Hover over each bar to see the unit name, what it was comprised of, and how many troops there were.'}
          <h1/>
          <a href="#Top">Back to top</a>
        </div>
        <div className = "empire">
          <h2>The Galactic Empire</h2>
          <img src="../../data/empire/cover.png" style={{height: 300}} />
          <hr style={{border: "2px solid yellow"}}/>
          <ImageChart imagePaths={['../../data/empire/vehicles/im1.jpg',
            '../../data/empire/vehicles/im2.jpg',
            '../../data/empire/vehicles/im3.jpg']}/>
          {`This is Empire ${longBlock}`}
          <ImageChart imagePaths={['../../data/empire/special/commander.png',
            '../../data/empire/special/magma.png',
            '../../data/empire/special/sniper.png']}/>
          <BarChart chartnum = "3"/>
          {`This is Empire ${longBlock}`}
          <BarChart chartnum = "3a"/>
          <a href="#Top">Back to top</a>
        </div>
        <div className = "FO">
          <h2>The First Order</h2>
          <img src="../../data/first_order/cover.png" style={{height: 300}} />
          <hr style={{border: "2px solid yellow"}}/>
          <ImageChart imagePaths={['../../data/first_order/vehicles/im1.jpg',
            '../../data/first_order/vehicles/im2.jpg',
            '../../data/first_order/vehicles/im3.jpg']}/>
          {`This is First Order ${longBlock}`}
          <ImageChart imagePaths={['../../data/first_order/special/flame.jpg',
            '../../data/first_order/special/riot.jpg',
            '../../data/first_order/special/rocket.jpg']}/>
          <BarChart chartnum = "4"/>
          {`This is First Order ${longBlock}`}
          <BarChart chartnum = "4a"/>
          <a href="#Top">Back to top</a>
        </div>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
