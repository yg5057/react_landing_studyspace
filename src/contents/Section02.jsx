import React from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';
import useScrollAnimation from '../hooks/useScrollAnimation';
import CardLarge from '../components/cards/CardLarge';
import CardSmall from '../components/cards/CardSmall.jsx';
import TypoH2 from '../components/typographys/TypoH2';
import TypoH3 from '../components/typographys/TypoH3';
import TypoH5 from '../components/typographys/TypoH5';
import TypoH6 from '../components/typographys/TypoH6';
import ParagraphM from '../components/typographys/ParagraphM';




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
  gap: 10rem;
`;
const ContsWrapper = styled.section`
  width: 100%;
  max-width: 140rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
`;
const Span = styled.span`
    color: var(--Dark-Blue-600);
`
const TitleGroupWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  @media (max-width: 768px) {  // mobile
    gap: 6rem
  }
`
const MainTitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.7rem;
  @media (max-width: 768px) {  // mobile
    gap: .6rem
  }
`
const SubTitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {  // mobile
    gap: .3rem
  }
`
const CardGroupWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  @media (max-width: 1024px) { // tablet 
    gap: 3rem;
  }
  @media (max-width: 768px) {  // mobile
    flex-direction: column;
    gap: 2rem
  }
`
const IconWrapper = styled.img`
    width: 150px;
    height: 150px;
    object-fit: contain;
  @media (max-width: 768px) {  // mobile
    width: 30px;
    height: 30px;
  }
`

const Section02 = () => {
  const sectionRef = useScrollAnimation(slideUpAnimation);
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <SectionWrapper ref={sectionRef} tablet={isTablet} mobile={isMobile}>
      <ContsWrapper>
        <TitleGroupWrapper>
          {isMobile ? (
            <MainTitleWrapper>
              <TypoH6 fontWeight='700' textAlign='center'>인테리어 시공자 <Span>1명만</Span></TypoH6>
              <TypoH6 fontWeight='700' textAlign='center'>견적 받으실 거 <Span>아니잖아요?</Span></TypoH6>
            </MainTitleWrapper>
          ) : isTablet ? (
            <MainTitleWrapper>
              <TypoH3 fontWeight='700' textAlign='center'>인테리어 시공자 <Span>1명만</Span></TypoH3>
              <TypoH3 fontWeight='700' textAlign='center'>견적 받으실 거 <Span>아니잖아요?</Span></TypoH3>
            </MainTitleWrapper>
          ) : (
            <MainTitleWrapper>
              <TypoH2 fontWeight='700' textAlign='center'>인테리어 시공자 <Span>1명만</Span></TypoH2>
              <TypoH2 fontWeight='700' textAlign='center'>견적 받으실 거 <Span>아니잖아요?</Span></TypoH2>
            </MainTitleWrapper>
          )}
          {isMobile ? (
            <SubTitleWrapper>
              <ParagraphM fontWeight='500' textAlign='center'>원하는 지역, 원하는 분야의 시공자들을 찾으시고</ParagraphM>
              <ParagraphM fontWeight='500' textAlign='center'>한 번에 여러 명의 시공자들에게 문자로 견적요청을 진행하세요!</ParagraphM>
            </SubTitleWrapper>
          ) : (
            <SubTitleWrapper>
              <TypoH5 fontWeight='500' textAlign='center'>원하는 지역, 원하는 분야의 시공자들을 찾으시고</TypoH5>
              <TypoH5 fontWeight='500' textAlign='center'>한 번에 여러 명의 시공자들에게 문자로 견적요청을 진행하세요!</TypoH5>
            </SubTitleWrapper>
          )}
        </TitleGroupWrapper>
        {isMobile ? (
          <CardGroupWrapper>
            <CardSmall>
              <TypoH6 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>시공자 검색</TypoH6>
            </CardSmall>
            <CardSmall>
              <TypoH6 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>후기 링크 확인</TypoH6>
            </CardSmall>
            <CardSmall>
              <TypoH6 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>요청 문자 발송</TypoH6>
            </CardSmall>
          </CardGroupWrapper>
        ) : (
          <CardGroupWrapper>
            <CardLarge>
         
              <TypoH6 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>시공자 검색</TypoH6>
            </CardLarge>
            <CardLarge>
              
              <TypoH6 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>후기 링크 확인</TypoH6>
            </CardLarge>
            <CardLarge>
             
              <TypoH6 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>요청 문자 발송</TypoH6>
            </CardLarge>
          </CardGroupWrapper>
        )}
      </ContsWrapper>
    </SectionWrapper>
  );
};

export default Section02;
