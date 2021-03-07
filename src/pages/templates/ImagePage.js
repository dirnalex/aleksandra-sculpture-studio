import React from 'react';
import styled from 'styled-components';
import {StandardTopBottomMargin} from '../../ReuseStyles';

const PageContainer = styled.div`
  ${StandardTopBottomMargin};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  text-align: center;
  object-fit: contain;
`;

const ImagePage = ({imageLink}) => {
  return (
    <PageContainer>
      <Image src={imageLink} alt="An image should be here, but we've lost it =("/>
    </PageContainer>
  );
};

export default ImagePage;