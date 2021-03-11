import React, {Fragment, Suspense} from 'react';
import {Link} from 'react-router-dom';

import {LanguageSelectBox} from './LanguageSelectPageStyles';
import Logo from '../components/icons/Logo';
import {useLoader} from 'react-three-fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import useExtendedRouteMatch from '../hooks/useExtendedRouteMatch';

const LanguageSelectPage = () => {
  const {urlWithoutSlash} = useExtendedRouteMatch();
  const gltf = useLoader(GLTFLoader, '/autoportret.glb')
  return (
    <Fragment>
      <Suspense fallback={<Logo/>}>
        <primitive object={gltf.scene}/>
      </Suspense>
      <LanguageSelectBox>
        <Link to={`${urlWithoutSlash}/en`}>en</Link>
        <Link to={`${urlWithoutSlash}/pl`}>pl</Link>
      </LanguageSelectBox>
    </Fragment>
  );
};

export default LanguageSelectPage;