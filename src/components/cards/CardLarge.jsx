import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
  display: flex;
  width: calc((100% - 20rem) / 3);
  height: auto;
  max-width: 30rem;
  max-height: 30rem;
  padding: 6rem 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--White);
  box-shadow: var(--DropShadow-OnLight-XXL);
  
  @media (max-width: 1024px) { // tablet 
    max-width: 23rem;
    max-height: 23rem;
    padding: 3rem;
  }
`;

const CardLarge = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default CardLarge;
