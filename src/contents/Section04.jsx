import React from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';
import useScrollAnimation from '../hooks/useScrollAnimation';

import CardFreeTrial from '../components/cards/CardFreeTrial';
import TypoH2 from '../components/typographys/TypoH2';
import TypoH4 from '../components/typographys/TypoH4';
import TypoH6 from '../components/typographys/TypoH6';
import BtnUrl from '../components/buttons/BtnUrl';



const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
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
    color: var(--Primary-400);
`

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section04 = () => {
  const sectionRef = useScrollAnimation(slideUpAnimation);
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const openURl = () => {  window.open('https://www.google.com', '_blank');  };

  return (
    <SectionWrapper ref={sectionRef}>
      <CardFreeTrial>
        {isMobile ? (
          <TypoH6 color='var(--White)' fontWeight='100'>Free-trial</TypoH6>
        ) : (
          <div>Free-trial</div>
        )}
        <TextGroup>
          {isMobile ? (
            <>
              <TypoH6 color='var(--White)' fontWeight='600'><Span>"이지 메이트"</Span> 와 함께</TypoH6>
              <TypoH6 color='var(--White)' fontWeight='600'>견적 요청으로 낭비되는 시간을</TypoH6>
              <TypoH6 color='var(--White)' fontWeight='600'>확실히 줄이세요!</TypoH6>
            </>
          ) : isTablet ? (
            <>
              <TypoH4 color='var(--White)' fontWeight='600'><Span>"이지 메이트"</Span> 와 함께</TypoH4>
              <TypoH4 color='var(--White)' fontWeight='600'>견적 요청으로 낭비되는 시간을</TypoH4>
              <TypoH4 color='var(--White)' fontWeight='600'>확실히 줄이세요!</TypoH4>
            </>
          ) : (
            <>
              <TypoH2 color='var(--White)' fontWeight='600'><Span>"이지 메이트"</Span> 와 함께</TypoH2>
              <TypoH2 color='var(--White)' fontWeight='600'>견적 요청으로 낭비되는 시간을</TypoH2>
              <TypoH2 color='var(--White)' fontWeight='600'>확실히 줄이세요!</TypoH2>
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

export default Section04;
