import React from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const Effects = () => (
  <EffectComposer>
    <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
  </EffectComposer>
);

export default Effects;
