import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import {LanguageSelectBox} from './LanguageSelectPageStyles';
import Logo from '../components/icons/Logo';
import useExtendedRouteMatch from '../hooks/useExtendedRouteMatch';

const LanguageSelectPage = () => {
  const {urlWithoutSlash} = useExtendedRouteMatch();
  return (
    <Fragment>
      <Logo/>
      <LanguageSelectBox>
        <Link to={`${urlWithoutSlash}/en`}>en</Link>
        <Link to={`${urlWithoutSlash}/pl`}>pl</Link>
      </LanguageSelectBox>
    </Fragment>
  );
};

export default LanguageSelectPage;