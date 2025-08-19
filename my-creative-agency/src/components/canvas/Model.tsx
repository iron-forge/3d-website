import React from 'react';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/models/scene.glb');
  return <primitive object={scene} />;
};

export default Model;
