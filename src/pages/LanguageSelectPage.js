import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import {LanguageSelectBox} from './LanguageSelectPageStyles';
import Logo from '../components/icons/Logo';

const LanguageSelectPage = props => {
  return (
    <Fragment>
      <Logo/>
      <LanguageSelectBox>
        <Link to="/en">en</Link>
        <Link to="/pl">pl</Link>
      </LanguageSelectBox>
    </Fragment>
  );
};

LanguageSelectPage.propTypes = {};

export default LanguageSelectPage;