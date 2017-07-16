import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
		React.Children.forEach(this.props.children, (child) => {
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

FLayer.propTypes = {
  states: PropTypes.array,
  onClick: PropTypes.func,
};

export default FLayer;