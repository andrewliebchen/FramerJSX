import React from 'react';
import { render } from 'react-dom';
import { Prototype, FLayer } from './Framer';

const App = () => 
  <Prototype
    deviceType="apple-iphone-6s-plus-space-gray">
    <FLayer
      backgroundColor={new Color('blue').alpha(0.5)}
      x={Align.center}
      y={Align.center}>

      <FLayer
        backgroundColor={new Color('yellow').alpha(0.5)}
        x={Align.center(-200)}
        y={Align.center(-200)}
        states={[{ hide: { opacity: 0 }}]}
        onClick={(self) => { self.stateCycle() }}/>

      <FLayer
        backgroundColor={new Color('magenta').alpha(0.5)}
        x={Align.center(20)}
        y={Align.center(20)}/>
    </FLayer>
  </Prototype>

render(
  <App />,
  document.getElementById('prototype')
);
