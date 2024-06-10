import React from 'react';
import styled from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';
import useScrollAnimation from '../hooks/useScrollAnimation';

import CardFreeTrial from '../components/cards/CardFreeTrial';
import TypoH2 from '../components/typographys/TypoH2';
import TypoH4 from '../components/typographys/TypoH4';
import TypoH6 from '../components/typographys/TypoH6';
import BtnUrl from '../components/buttons/BtnUrl';



const SectionWrapper = styled.section`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Span = styled.span`
    color: var(--Amethyst-Purple-600);
    font-family: var(--font-family-secondary);
`

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section03 = () => {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const openURl = () => {  window.open('https://walla.my/survey/WpJlOOdYjQfEuPpfElQ6', '_blank');  };

  return (
    <SectionWrapper>
      <CardFreeTrial>
        {isMobile ? (
          <TypoH6 color='var(--White)' fontWeight='100'>Free-trial</TypoH6>
        ) : (
          <div>Free-trial</div>
        )}
        <TextGroup>
          {isMobile ? (
            <>
              <TypoH6 color='var(--White)' fontWeight='600'><Span>Study Space</Span> 에서 만나</TypoH6>
              <TypoH6 color='var(--White)' fontWeight='600'>여러분의 인테리어 경험을</TypoH6>
              <TypoH6 color='var(--White)' fontWeight='600'>함께 공유하세요!</TypoH6>
            </>
          ) : isTablet ? (
            <>
              <TypoH4 color='var(--White)' fontWeight='600'><Span>Study Space</Span> 에서 만나</TypoH4>
              <TypoH4 color='var(--White)' fontWeight='600'>여러분의 인테리어 경험을</TypoH4>
              <TypoH4 color='var(--White)' fontWeight='600'>함께 공유하세요!</TypoH4>
            </>
          ) : (
            <>
              <TypoH2 color='var(--White)' fontWeight='600'><Span>Study Space</Span> 에서 만나</TypoH2>
              <TypoH2 color='var(--White)' fontWeight='600'>여러분의 인테리어 경험을</TypoH2>
              <TypoH2 color='var(--White)' fontWeight='600'>함께 공유하세요!</TypoH2>
            </>
          )}
        </TextGroup>
        <Btn>
          <BtnUrl onClick={openURl}>시작하기</BtnUrl>
        </Btn>
      </CardFreeTrial>
    </SectionWrapper>
  );
};

export default Section03;
