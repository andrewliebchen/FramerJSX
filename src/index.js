import React, { Component } from 'react';
import { render } from 'react-dom';

// Device types?
const Prototype = (props) => props.children;

class FLayer extends Component {
	_bindEvents(layer, props) {
		props.onClick && layer.onClick(() => {
      props.onClick(layer);
    });
	}

	_registerStates(layer, props) {
		props.states && props.states.map((state, i) => {
			const stateName = Object.keys(state);
			layer.states[stateName] = state[stateName];
		});
	}

	_renderChildren(layer) {
		const { children } = this.props;

		React.Children.forEach(children, (child) => {
			let childLayer = new Layer({
        parent: layer,
        ...child.props,
      });

      this._bindEvents(childLayer, child.props);
      this._registerStates(childLayer, child.props);
    });
	}


  render() {
		// Render parent layer
    let parentLayer = new Layer(this.props);

    this._bindEvents(parentLayer, this.props);
    this._registerStates(parentLayer, this.props);
    this._renderChildren(parentLayer);

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
      x={Align.center}
      y={Align.center}>

      <F.Layer
        backgroundColor={new Color('yellow').alpha(0.5)}
        x={Align.center(-200)}
        y={Align.center(-200)}
        states={[{ hide: { opacity: 0 }}]}
        onClick={(self) => { self.stateCycle() }}/>

      <F.Layer
        backgroundColor={new Color('magenta').alpha(0.5)}
        x={Align.center(20)}
        y={Align.center(20)}/>
    </F.Layer>
  </F.Prototype>,
  document.getElementById('prototype')
);
