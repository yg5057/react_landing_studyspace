import React from 'react';
import styled from 'styled-components';


const StyledCardWrapper = styled.div`
  display: flex;
  width: 56.8rem;
  height: 60.1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--White);
  box-shadow: var(--DropShadow-OnDark-XXL);
`;
const StyledCardTop = styled.div`
  display: flex;
  width: 100%;
  height: 15rem;
  padding: 4rem 6rem 1rem 6rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`;
const StyledCardBtm = styled.div`
  display: flex;
  width: 100%;
  height: 45.1rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex-shrink: 0;
`;

const Image = styled.img`
  width: auto;
  height: auto;
`;


const CardLarge = ({ children, image }) => {
  return (
    <StyledCardWrapper>
      <StyledCardTop>
        {children}
      </StyledCardTop>
      <StyledCardBtm>
        <Image src={image} alt="Card Image" />
      </StyledCardBtm>
    </StyledCardWrapper>
  );
};

export default CardLarge;
