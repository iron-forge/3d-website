import React from 'react';

const Lights = () => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 10, 7.5]} intensity={1} />
  </>
);

export default Lights;
