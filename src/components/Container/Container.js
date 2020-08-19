import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  
  p {
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 1.3em;
    }
  }
`

const ContainerComponent = ({ children }) => (
  <Container>
      {children}
  </Container>
)

export default ContainerComponent;