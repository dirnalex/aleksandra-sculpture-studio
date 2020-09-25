import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Diagonal, LanguageSelect, Logo, Vertical} from './LanguageSelectPageStyles';

const LanguageSelectPage = props => {
  return (
    <Fragment>
      <Logo viewBox="0 0 27 40">
        <Diagonal
          d="M19.9641 0.00930016L3.07421 24.5245C2.79973 24.9244 2.35141 25.1569 1.87564 25.1569H0V26.6915H1.58285H2.69908H7.53914L25.9387 0L19.9641 0.00930016Z"/>
        <Vertical
          d="M22.041 16.322V36.4569L27 40.0002V13.4482H22.041H19.3511V14.9828H20.7235C21.4554 14.9828 22.041 15.5873 22.041 16.322Z"/>
      </Logo>
      <LanguageSelect>
        <Link to="/en">en</Link>
        <Link to="/pl">pl</Link>
      </LanguageSelect>
    </Fragment>
  );
};

LanguageSelectPage.propTypes = {};

export default LanguageSelectPage;