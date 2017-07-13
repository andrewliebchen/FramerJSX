import React, { Component } from 'react';
import { render } from 'react-dom';

// Device types?
const Prototype = (props) => props.children;

// Layer states?
class FLayer extends Component {
  render() {
    let parentLayer = new Layer(this.props);

    parentLayer.onClick(() => {
      console.log(parentLayer.states);
      this.props.onClick(parentLayer);
    });

    this.props.children.length > 1 && this.props.children.map((child, i) =>
      new Layer(Object.assign(
        { parent: parentLayer },
        child.props
      ))
    );

    return false;
  }
}

const F = {
  Layer: FLayer,
  Prototype: Prototype
};


render(
  <F.Prototype>
    <F.Layer
      backgroundColor={new Color('blue').alpha(0.5)}
      x={Align.center(20)}
      y={Align.center(20)}
      states={{ hide: { opacity: 0 }}}
      onClick={(self) => { self.stateCycle() }}>

      <F.Layer
        backgroundColor={new Color('red').alpha(0.5)}
        x={Align.center(-20)}
        y={Align.center(-20)}/>

      <F.Layer
        backgroundColor={new Color('magenta').alpha(0.5)}
        x={Align.center(-40)}
        y={Align.center(-40)}/>
    </F.Layer>
  </F.Prototype>,
  document.getElementById('prototype')
);
