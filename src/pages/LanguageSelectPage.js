import React, {Fragment, Suspense} from 'react';
import {Link} from 'react-router-dom';

import Logo from '../components/icons/Logo';
import useExtendedRouteMatch from '../hooks/useExtendedRouteMatch';
import styled from 'styled-components';
import {Canvas} from '@react-three/fiber';
import {Html} from '@react-three/drei';
import OlaFaceThreeD from '../components/OlaFaceThreeD';

const LanguageSelectBox = styled.div`
  position: fixed;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50%);
  
  &>*:nth-child(n+2) {
    margin-left: 40px;
  }
  &>*:hover {
    color: #00EED1;
  }
`;

const LanguageSelectPage = () => {
  const {urlWithoutSlash} = useExtendedRouteMatch();
  return (
    <Fragment>
      <Canvas>
        <ambientLight/>
        <pointLight position={[20, 10, 10]}/>
        <Suspense fallback={<Html center><Logo/></Html>}>
          <OlaFaceThreeD/>
        </Suspense>
      </Canvas>
      <LanguageSelectBox>
        <Link to={`${urlWithoutSlash}/en`}>en</Link>
        <Link to={`${urlWithoutSlash}/pl`}>pl</Link>
      </LanguageSelectBox>
    </Fragment>
  );
};

export default LanguageSelectPage;