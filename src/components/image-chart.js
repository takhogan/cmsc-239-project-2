import React, {PureComponent} from 'react';

const globalYear = 0;

export default class ImageChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      maxIndex: this.props.imagePaths.length - 1
    };
  }

  render() {
    const imagePaths = this.props.imagePaths;
    console.log(imagePaths[this.state.index])
    return (
      <div
        className = "image-chart-div"
        width = {'100%'}
        height = {'100%'}
        style = {{backgroundColor: 'transparent', textAlign: "center"}}
      >
        <button
          style = {{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            // padding: '15px 32px',
            display: 'inline-block',
            fontSize: '8px',
            textAlign: 'center',
            //textDecoration: 'none',
            width: '0',
            height: '0',
            borderTop: '25px solid transparent',
            borderRight: '50px solid yellow',
            borderBottom: '25px solid transparent'
          }}
          onClick={() => this.changeIndex(-1)}
        >

        </button>
        <img
          src = {imagePaths[this.state.index]}
          style={{width: 500, height: 500}}
          alt={'image not found'}/>
        <button
          style = {{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            //padding: '15px 32px',
            display: 'inline-block',
            fontSize: '8px',
            textAlign: 'center',
            // textDecoration: 'none',
            width: '0',
            height: '0',
            borderTop: '25px solid transparent',
            borderLeft: '50px solid yellow',
            borderBottom: '25px solid transparent'
          }}
          onClick={() => this.changeIndex(1)}
        >

        </button>
      </div>
    );
  }

  changeIndex(direction) {
    const newIndex = this.state.index + direction;
    if (newIndex <= this.state.maxIndex && newIndex >= 0) {
      this.setState({index: newIndex, maxIndex: this.state.maxIndex});
    }
  }
}
