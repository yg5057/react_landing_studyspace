import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
  display: flex;
  width: 30rem;
  height: 6rem;
  padding: 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--White);
  box-shadow: var(--DropShadow-OnLight-XXL);
`;

const CardSmall = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default CardSmall;
