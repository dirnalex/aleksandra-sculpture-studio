import React, {useRef} from 'react';
import {useFrame, useLoader} from '@react-three/fiber';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';

const OlaFaceThreeD = () => {
  const faceRef = useRef();
  useFrame(({mouse}) => {
    const verticalRotation = mouse.y - 0.272 < -1 ? 1 : 0.272 - mouse.y;
    const horizontalRotation = mouse.x + 0.012 > 1 ? 1 : 0.012 + mouse.x;
    faceRef.current.rotation.set(verticalRotation, horizontalRotation, 0.04);
  });
  const materials = useLoader(MTLLoader, '/3d/ola.mtl');
  const object = useLoader(OBJLoader, '/3d/ola.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return (
    <primitive ref={faceRef} object={object} scale={[3, 3, 3]} position={[-0.15, 0.7, 0]}/>
  );
};

export default OlaFaceThreeD;