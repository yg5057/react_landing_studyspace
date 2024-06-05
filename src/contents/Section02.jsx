import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';
import useScrollAnimation from '../hooks/useScrollAnimation';

import CardLarge from '../components/cards/CardLarge';
import CardSmall from '../components/cards/CardSmall.jsx';
import TypoH4 from '../components/typographys/TypoH4';
import TypoH3 from '../components/typographys/TypoH3';
import TypoH5 from '../components/typographys/TypoH5';
import TypoH6 from '../components/typographys/TypoH6';
import ParagraphS from '../components/typographys/ParagraphS';

import ImgLStudy from '../assets/imgLarge_study.png';
import ImgLAi from '../assets/imgLarge_Ai.png';
import ImgLConsulting from '../assets/imgLarge_consulting.png';
import ImgLCoupon from '../assets/imgLarge_coupon.png';





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
  height: 200vh;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
`;
const ContsWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 216rem;
  max-width: 144rem;
  max-height: 216rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22rem;
  flex-shrink: 0;
  @media (max-width: 1024px) {  // tablet
    max-width: 83.4rem;
    max-height: 358.2rem;
    padding: 4rem;
    gap: 12rem;
  }
  @media (max-width: 768px) {  // mobile
    max-width: 39rem;
    max-height: 168.8rem;
    padding: 1rem;
    gap: 4.5rem;
  }
`;
const Conts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 8rem;
  flex-shrink: 0;
  @media (max-width: 1024px) {  // tablet

  }
  @media (max-width: 768px) {  // mobile

  }
`;
const Span = styled.span`
    color: var(--Amethyst-Purple-600);
    font-family: var(--font-family-secondary);
`
const CardWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`




const Section02 = () => {
  const sectionRef = useScrollAnimation(slideUpAnimation);
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');


  return (
    <SectionWrapper ref={sectionRef} tablet={isTablet} mobile={isMobile}>
      <ContsWrapper>
        <Conts>
          <TypoH4>
            <Span>Study Space</Span> 에서 무엇을 할 수 있나요?
          </TypoH4>
          <CardWrapper>
            <CardLarge image={ImgLStudy}>
              <CardTitle>
                <TypoH6 color='var(--Amethyst-Purple-600)'fontWeight='700'>스터디</TypoH6>
                <ParagraphS color='var(--Neutral-Gray-400)'fontWeight='600'>나와 비슷한 시기에 인테리어를 하는<br/>소비자들과 정보도 나누고 위로도 받으세요!</ParagraphS>
              </CardTitle>
            </CardLarge>
            <CardLarge image={ImgLAi}>
              <CardTitle>
                <TypoH6 color='var(--Amethyst-Purple-600)'fontWeight='700'>스터디</TypoH6>
                <ParagraphS color='var(--Neutral-Gray-400)'fontWeight='600'>나와 비슷한 시기에 인테리어를 하는<br/>소비자들과 정보도 나누고 위로도 받으세요!</ParagraphS>
              </CardTitle>
            </CardLarge>
          </CardWrapper>
        </Conts>
        <Conts>
          <TypoH4>
            <Span>Study Space</Span> 에서 무엇을 할 수 있나요?
          </TypoH4>
          <CardWrapper>
            <CardLarge image={ImgLConsulting}>
              <CardTitle>
                <TypoH6 color='var(--Amethyst-Purple-600)'fontWeight='700'>전문가 상담</TypoH6>
                <ParagraphS color='var(--Neutral-Gray-400)'fontWeight='600'>인테리어, 시공, 디자인 등 각 분야의 전문가와 함께
                  <br/>실시간 상담을 진행하세요!
                </ParagraphS>
              </CardTitle>
            </CardLarge>
            <CardLarge image={ImgLCoupon}>
              <CardTitle>
                <TypoH6 color='var(--Amethyst-Purple-600)'fontWeight='700'>리워드 받기</TypoH6>
                <ParagraphS color='var(--Neutral-Gray-400)'fontWeight='600'>우수 스터디원이 되시면
                  <br/>커피 쿠폰, 오늘의집 쿠폰 등 다양한 쿠폰을 드립니다.</ParagraphS>
              </CardTitle>
            </CardLarge>
          </CardWrapper>
        </Conts>
      </ContsWrapper>
    </SectionWrapper>
  );
};

export default Section02;
