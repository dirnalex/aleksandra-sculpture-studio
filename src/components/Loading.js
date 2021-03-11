import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  border-radius: 100%;
  background-color: #00EED1;
  width: 15px;
  height: 15px;
  
  animation: 500ms ease-in-out infinite alternate pulse;
  
  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(2);
    }
  }
`;

const Loading = () => {
  return (
    <Container>
      <Icon/>
    </Container>
  );
};

export default Loading;