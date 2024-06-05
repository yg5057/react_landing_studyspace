import React from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';

import TypoH2 from '../components/typographys/TypoH2';
import TypoH3 from '../components/typographys/TypoH3';
import TypoH4 from '../components/typographys/TypoH4';
import TypoH5 from '../components/typographys/TypoH5';
import TypoH6 from '../components/typographys/TypoH6';
import ParagraphL from '../components/typographys/ParagraphL';
import BtnUrl from '../components/buttons/BtnUrl';
import Scroll from '../components/scroll/Scroll';


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
  width: 100vw;
  height: 100vh;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContsWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 144rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12rem;
  flex-shrink: 0;
  @media (max-width: 1024px) {  // tablet
    gap: 16rem;
  }
  @media (max-width: 768px) {  // mobile
    gap: 8rem;
  }
`;
const TitleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  flex-shrink: 0;
   @media (max-width: 1024px) {  // tablet
    gap: 5rem;
  }
`
const Span = styled.span`
    color: var(--Amethyst-Purple-600);
    font-family: var(--font-family-secondary);
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    animation: ${slideUpAnimation} 1s ease forwards;
    @media (max-width: 768px) {  // mobile
    gap: .3rem;
  }
`
const Text = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    animation: ${slideUpAnimation} 1.2s ease forwards;
    @media (max-width: 768px) {  // mobile
    gap: .3rem;
  }
`
// const Text = styled.article`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     flex-shrink: 0;
//     animation: ${slideUpAnimation} 1.4s ease forwards;
//     @media (max-width: 1024px) {  // tablet
//     gap: 5rem;
//   }
//   @media (max-width: 768px) {  // mobile
//     gap: 3rem;
//   }
// `
const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideUpAnimation} 1.6s ease forwards;
`
const ScrollWrapper = styled.div`
    display: flex;
    animation: ${slideUpAnimation} 1.8s ease forwards;
`;

const Section01 = () => {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const openURl = () => { window.open('https://walla.my/survey/WpJlOOdYjQfEuPpfElQ6', '_blank'); };

  return (
    <SectionWrapper tablet={isTablet} mobile={isMobile}>
      <ContsWrapper>
        <TitleWrapper>
          {isMobile ? (
            <Title>
              <ParagraphL LpoH4 fontWeight='600' textAlign='center'>반셀프 인테리어...</ParagraphL>
              <ParagraphL fontWeight='600' textAlign='center'>하고 싶은데 혼자서 공부하는게 너무 힘드셨죠?</ParagraphL>
            </Title>
          ) : isTablet ? (
            <Title>
              <TypoH6 fontWeight='600' textAlign='center'>반셀프 인테리어...</TypoH6>
              <TypoH6 fontWeight='600' textAlign='center'>하고 싶은데 혼자서 공부하는게 너무 힘드셨죠?</TypoH6>
            </Title>
          ) : (
            <Title>
              <TypoH5 fontWeight='600' textAlign='center'>반셀프 인테리어...</TypoH5>
              <TypoH5 fontWeight='600' textAlign='center'>하고 싶은데 혼자서 공부하는게 너무 힘드셨죠?</TypoH5>
            </Title>
          )}
          {isMobile ? (
            <Text>
              <TypoH6 fontWeight='600'><Span>Study Space</Span> 에서</TypoH6>
            </Text>
          ) : isTablet ? (
            <Text>
              <TypoH3 fontWeight='600'><Span>Study Space</Span> 에서</TypoH3>
            </Text>
          ) : (
            <Text>
              <TypoH2 fontWeight='600'><Span>Study Space</Span> 에서</TypoH2>
            </Text>
          )}
          {isMobile ? (
            <Text>
              <ParagraphL fontWeight='500' textAlign='center'>다른 인테리어 소비자들과 함께</ParagraphL>
              <ParagraphL fontWeight='500' textAlign='center'>인테리어 스터디도 받고, 전문가 상담까지 한번에!</ParagraphL>
            </Text>
          ) : isTablet ? (
            <Text>
              <TypoH4 fontWeight='500' textAlign='center'>다른 인테리어 소비자들과 함께</TypoH4>
              <TypoH4 fontWeight='500' textAlign='center'>인테리어 스터디도 받고, 전문가 상담까지 한번에!</TypoH4>
            </Text>
          ) : (
            <Text>
              <TypoH3 fontWeight='600' textAlign='center'>다른 인테리어 소비자들과 함께</TypoH3>
              <TypoH3 fontWeight='600' textAlign='center'>인테리어 스터디도 받고, 전문가 상담까지 한번에!</TypoH3>
            </Text>
          )}
        </TitleWrapper>
        <Btn>
          <BtnUrl onClick={openURl}>시작하기</BtnUrl>
        </Btn>
        <ScrollWrapper>
          <Scroll>SCROLL</Scroll>
        </ScrollWrapper>
      </ContsWrapper>
    </SectionWrapper>
  );
};

export default Section01;