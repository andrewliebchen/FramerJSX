import React, { Component } from 'react';
import { render } from 'react-dom';

// Device types?
const Prototype = (props) => props.children;

class FLayer extends Component {
	_bindEvents(layer) {
		const { onClick } = this.props;

		onClick && layer.onClick(() => {
      onClick(layer);
    });
	}

	_registerStates(layer) {
		const { states } = this.props;

		states && states.map((state, i) => {
			const stateName = Object.keys(state);
			layer.states[stateName] = state[stateName];
		});
	}

	_renderChildren(layer) {
		const { children } = this.props;

		React.Children.forEach(children, (child) => {
			console.log(child);
    });
	}

	_constructLayerAccessories(layer) {
		this._bindEvents(layer);
		this._registerStates(layer);
    this._renderChildren(layer);
	}

  render() {
		// Render parent layer
    let parentLayer = new Layer(this.props);

		this._constructLayerAccessories(parentLayer);

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
      y={Align.center(20)}>

      <F.Layer
        backgroundColor={new Color('red').alpha(0.5)}
        x={Align.center(-20)}
        y={Align.center(-20)}
				states={[{ hide: { opacity: 0 }}]}
	      onClick={(self) => { self.stateCycle() }}/>

      <F.Layer
        backgroundColor={new Color('magenta').alpha(0.5)}
        x={Align.center(-40)}
        y={Align.center(-40)}/>
    </F.Layer>
  </F.Prototype>,
  document.getElementById('prototype')
);
