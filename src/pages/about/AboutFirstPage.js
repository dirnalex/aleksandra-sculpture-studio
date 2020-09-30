import React from 'react';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';

const StyledFirstPage = styled.p`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 50px 210px 50px 240px;
  display: flex;
  align-items: center;
  
  font-weight: 300;
  font-size: 1.75em;
  line-height: 129%;
  text-indent: 240px;
`;

const AboutFirstPage = props => {
  return (
    <StyledFirstPage>
      <FormattedMessage id="about.0.text"/>
    </StyledFirstPage>
  );
};

AboutFirstPage.propTypes = {};

export default AboutFirstPage;