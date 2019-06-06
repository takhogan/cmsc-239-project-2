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
<<<<<<< HEAD
          <img src="data/phase_1/cover.png" style={{height: 300}} />
          <ImageChart imagePaths={['data/phase_1/vehicles/im1.jpg',
            'data/phase_1/vehicles/im2.jpg',
            'data/phase_1/vehicles/im3.jpg']}/>
          {`This is Phase 1 ${longBlock}`}
          <ImageChart imagePaths={['data/phase_1/special/commander.png',
            'data/phase_1/special/heavy.png',
            'data/phase_1/special/jet.png']}/>
=======
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
>>>>>>> e6ce9448c5061395cba5a0b1980f94e6af395fdd
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
<<<<<<< HEAD
          <img src="data/phase_2/cover.png" style={{height: 300}} />
          <ImageChart imagePaths={['data/phase_2/vehicles/im1.jpg',
            'data/phase_2/vehicles/im2.jpg',
            'data/phase_2/vehicles/im3.jpg']}/>
          {`This is Phase 2 ${longBlock}`}
          <ImageChart imagePaths={['data/phase_2/special/fox.jpg',
            'data/phase_2/special/heavy.png',
            'data/phase_2/special/sniper.jpg']}/>
          {`This is Phase 2 ${longBlock}`}
        </div>
        <div className = "empire">
          <h2>The Galactic Empire</h2>
          <img src="data/empire/cover.png" style={{height: 300}} />
          <ImageChart imagePaths={['data/empire/vehicles/im1.jpg',
            'data/empire/vehicles/im2.jpg',
            'data/empire/vehicles/im3.jpg']}/>
          {`This is Empire ${longBlock}`}
          <ImageChart imagePaths={['data/empire/special/commander.png',
            'data/empire/special/magma.png',
            'data/empire/special/sniper.png']}/>
          {`This is Empire ${longBlock}`}
        </div>
        <div className = "FO">
          <h2>The First Order</h2>
          <img src="data/first_order/cover.png" style={{height: 300}} />
          <ImageChart imagePaths={['data/first_order/vehicles/im1.jpg',
            'data/first_order/vehicles/im2.jpg',
            'data/first_order/vehicles/im3.jpg']}/>
          {`This is First Order ${longBlock}`}
          <ImageChart imagePaths={['data/first_order/special/flame.jpg',
            'data/first_order/special/riot.jpg',
            'data/first_order/special/rocket.jpg']}/>
          {`This is First Order ${longBlock}`}
=======
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
          <h3> Overview </h3>
          {'Imperial Stormtroopers were the main soldiers used by the Imperial Army after the Republic was converted into the Galactic Empire by Darth Sidious. Originally, the imperial stormtroopers were just repurposed clones from the Clone Wars. This practiced phased out, however, after clone insurrections and stormtroopers instead became human recruits. Recruits, also known as cadets, were given rigorous training in order to get them to be battle ready for the frontlines of battle. Unlike their predecessors, the imperial stormtrooper armor was standardized to be a simple white armor.'}
          <hr style={{border: "2px solid yellow"}}/>
          <h3> Vehicles Used </h3>
          <ImageChart imagePaths={['../../data/empire/vehicles/im1.jpg',
            '../../data/empire/vehicles/im2.jpg',
            '../../data/empire/vehicles/im3.jpg']}/>
          <h5> Use the left and right arrows to toggle back and forth between images </h5>
          <h4>Imperial-class Star Destroyer </h4>
          {'The Imperial-class star destroyer was the most common capitol ship in the Imperial navy. Larger than its predecessor and with more fire power, the Imperial class star destroyer quickly replaced the Venator class star destroyer at the end of the clone wars. At the height of imperial power, the Empire had over 25,000 operating star destroyers in its navy.'}
          <h4>All Terrain Scout Transport (ATST) </h4>
          {'The ATST walker was made to be a lightweight, bipedal walker for troop tactical support, as well as to serve as the guard of larger ATAT walkers in major conflicts. The ATST’s swift pace and maneuverability meant that it could be used more easily to patrol cities under imperial control than other larger transports in the Empire’s use. They were equipped with high powered blaster cannons and concussion grenade launchers.'}
          <h4>All Terrain Armored Transport (ATAT) </h4>
          {'The ATAT walker was a massive, heavily armored, four-legged combat walker used by the Galactic empire. It was used not only for troop transport, but also to take out enemy installations with ease. High powered canons mounted to its front gave it the advantage in fire power against most ground artillery.'}
          <h3> Special Units</h3>
          <ImageChart imagePaths={['../../data/empire/special/commander.png',
            '../../data/empire/special/magma.png',
            '../../data/empire/special/sniper.png']}/>
          <h5> Use the left and right arrows to toggle back and forth between images </h5>
          <h4> Stormtrooper Commander </h4>
          {'Stormtrooper commanders were much lower in rank than their clone commander counterparts in the Galactic Republic’s army. Rather than commanding a whole corps of men, stormtrooper commanders were in charge of commanding their individual squads. Not terribly different from regular stormtroopers, they distinguished themselves by wearing orange and red pauldrons.'}
          <h4> Magma Trooper </h4>
          {'Magma troopers were a special force of stormtroopers that operated in particular on volcanic worlds. Their armor was designed to withstand extremely high temperatures, and included a black pauldron and respirators as well. They were mostly used on Mustafar, Shu-Torin and Sullust.'}
          <h4>Stormtrooper sniper </h4>
          {'Stormtrooper snipers were elite units of storm troopers. Distinguishing themselves with blue or white pauldrons on their shoulders, they were used for tactical support in battle and stationed on highly populated planets in order to keep civilian peace.'}
          <h3> Military makeup of the Army </h3>
          <BarChart chartnum = "3"/>
          {'The above chart shows the break down of Imperial military units. Hover over each bar to see the unit name, what it was comprised of, and how many troops there were.'}
          <h4> Opposing forces </h4>
          <BarChart chartnum = "3a"/>
          {'The main oponent of the Empire was the Rebel Alliance. The above chart shows the break down of Alliance military units. Hover over each bar to see the unit name, what it was comprised of, and how many troops there were.'}
          <h1/>
          <a href="#Top">Back to top</a>
        </div>
        <div className = "FO">
          <h2>The First Order</h2>
          <img src="../../data/first_order/cover.png" style={{height: 300}} />
          <h3> Overview </h3>
          {'The First Order stormtroopers were the military forces of the First Order. They were designed to be highly similar to the Imperial stormtroopers which preceded the First Order. Kidnapped at birth, stormtroopers were trained since childhood to be virtually bred for battle. They did not know their own names and referred instead to themselves and others by their serial numbers. They were made in the vision of General Brendol Hux’s perfect soldier.'}
          <hr style={{border: "2px solid yellow"}}/>
          <h3> Vehicles Used </h3>
          <ImageChart imagePaths={['../../data/first_order/vehicles/im1.jpg',
            '../../data/first_order/vehicles/im2.jpg',
            '../../data/first_order/vehicles/im3.jpg']}/>
          <h5> Use the left and right arrows to toggle back and forth between images </h5>
          <h4> Resurgent-class Star Destroyer </h4>
          {'The Resurgent-class Star Destroyer was the main star destroyer used by First Order troops. It measured nearly 3 kilometers long, was heavily armored and gunned, and could carry up to 82,000 personnel. The ship was meant to embody the power and military might of the first order.'}
          <h4> TIE/sf starfighter </h4>
          {'The TIE/sf starfighter used by the First Order was a variant of the Imperial TIE fighter that predated it. Unlike the Imperial model, the TIE/sf fighter was a two seater fighter. It also was outfitted with better weapons and sensor systems, deflector shields, and a hyper drive.'}
          <h4> All Terrain MegaCaliber Six Transport (ATM6) </h4>
          {'The ATM6 was a massive, mobile assault walker used by the First Order. It was much larger than the other walkers in the First order arsenal, as well as its imperial predecessor. It featured a MegaCaliber Six turbolaser cannon on its gack, giving it massive fire power potential.'}
          <h3> Special Units</h3>
          <ImageChart imagePaths={['../../data/first_order/special/flame.jpg',
            '../../data/first_order/special/riot.jpg',
            '../../data/first_order/special/rocket.jpg']}/>
          <h5> Use the left and right arrows to toggle back and forth between images </h5>
          <h4> First Order Flametrooper </h4>
          {'The flametroopers of the First Order were a variant of the storm trooper used to root out enemies in entrenched positions. They were equipped with flame-proof armor and a high-powered flamethrower.'}
          <h4> Riot Control Stormtrooper </h4>
          {'The riot control stormtrooper was a variant of the First Order stormtrooper specially designed for crowd control on First Order controlled worlds. They were given non-lethal equipment like riot shields and Z6 control batons featuring lightsaber resistance. In cases of extreme crowd subduction, they carried blaster rifles for lethal force as well.'}
          <h4> Jet trooper </h4>
          {'The First Order rocket trooper was another variant of the stormtrooper used for special operations tactical missions. They carried small jump packs with small rockets and had pauldrons on their shoulders. They were trained in aerial combat rather than ground combat.'}
          <h3> Military makeup of the Army </h3>
          <BarChart chartnum = "4"/>
          {'The above chart shows the break down of First Order military units. Hover over each bar to see the unit name, what it was comprised of, and how many troops there were.'}
          <BarChart chartnum = "4a"/>
          {'The main oponent of the First Order was the Resistance. At the end of the Battle of Crait, less than 30 remained.'}
          <h1/>
          <a href="#Top">Back to top</a>
>>>>>>> e6ce9448c5061395cba5a0b1980f94e6af395fdd
        </div>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
