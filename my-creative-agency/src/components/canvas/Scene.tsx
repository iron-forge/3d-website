import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import Lights from './Lights';
import Effects from './Effects';

const Scene = () => (
  <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100vw', height: '100vh' }}>
    <Lights />
    <Model />
    <Effects />
  </Canvas>
);

export default Scene;
