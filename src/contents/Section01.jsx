import React from 'react';
import styled, { keyframes } from 'styled-components';
import useMediaQuery from '../hooks/useMediaQuery';

import TypoH1 from '../components/typographys/TypoH1';
import TypoH3 from '../components/typographys/TypoH3';
import TypoH4 from '../components/typographys/TypoH4';
import TypoH5 from '../components/typographys/TypoH5';
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
const ContsWrapper = styled.section`
  width: 100%;
  max-width: 140rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ mobile }) => (mobile ? '8rem' : '10rem')};
`;
const Span = styled.span`
    color: var(--Dark-Blue-600);
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    animation: ${slideUpAnimation} 1s ease forwards;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    animation: ${slideUpAnimation} 1.2s ease forwards;
`
const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideUpAnimation} 1.4s ease forwards;
`
const ScrollWrapper = styled.div`
    display: flex;
    animation: ${slideUpAnimation} 1.6s ease forwards;
`;

const Section01 = () => {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const openURl = () => { window.open('https://www.google.com', '_blank'); };

  return (
    <SectionWrapper tablet={isTablet} mobile={isMobile}>
      <ContsWrapper>
      {isMobile ? (
        <Title>
          <TypoH4 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>시공자에게 일일이</TypoH4>
          <TypoH4 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>전화로 견적받기</TypoH4>
          <TypoH4 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>힘드셨죠?</TypoH4>
        </Title>
      ) : isTablet ? (
        <Title>
          <TypoH3 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>시공자에게 일일이</TypoH3>
          <TypoH3 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>전화로 견적 받기 힘드셨죠?</TypoH3>
        </Title>
      ) : (
        <Title>
          <TypoH1 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>시공자에게 일일이 전화로 견적 받기 힘드셨죠?</TypoH1>
        </Title>
      )}
      {isMobile ? (
        <Text>
          <ParagraphL fontWeight='500' textAlign='center'><Span>"이지메이트"</Span> 에서</ParagraphL>
          <ParagraphL fontWeight='500' textAlign='center'> 마음에 드는 <Span>시공자들 후기도 확인</Span>하고</ParagraphL>
          <ParagraphL fontWeight='500' textAlign='center'>견적과 미팅 요청, 단체 문자도 <Span>한 번에!</Span></ParagraphL>
        </Text>
      ) : (
        <Text>
          <TypoH5 fontWeight='500'><Span>"이지메이트"</Span> 에서 마음에 드는 <Span>시공자들 후기도 확인</Span>하고</TypoH5>
          <TypoH5 fontWeight='500'>견적과 미팅 요청, 단체 문자도 <Span>한 번에!</Span></TypoH5>
        </Text>
      )}
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