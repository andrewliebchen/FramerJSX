import React from 'react';
import PropTypes from 'prop-types';

const Prototype = (props) => { 
  let device = new DeviceComponent({...props});
  device.setupContext();

  return props.children;
};

Prototype.propTypes = {
  deviceType: PropTypes.string,
};

export default Prototype;