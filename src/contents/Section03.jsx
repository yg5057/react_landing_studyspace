import React from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';
import useScrollAnimation from '../hooks/useScrollAnimation';

import TypoH2 from '../components/typographys/TypoH2';
import TypoH3 from '../components/typographys/TypoH3';
import TypoH5 from '../components/typographys/TypoH5';
import Subtitle from '../components/typographys/Subtitle';
import ParagraphL from '../components/typographys/ParagraphL';





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
  justify-content: center;
  align-items: center;
`;
const ContsWrapper = styled.section`
  width: 100%;
  max-width: 140rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1024px) {  // tablet
    flex-direction: column;
    gap: 11rem;
  }
  @media (max-width: 768px) {  // mobile
    gap: 9rem;
  }
`;
const ContsLeftWrapper = styled.article`
  width: 60%;
  height: auto;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
  gap: 8rem;
  @media (max-width: 1024px) {  // tablet
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {  // mobile
    gap: 3rem;
  }
`;
const MainTitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1024px) {  // tablet 이하
    justify-content: center;
    align-items: center;
  }
`
const SubTitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 1024px) {  // tablet
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
  }
  @media (max-width: 768px) {  // mobile
    gap: .5rem;
  }
`
const ContsRightWrapper = styled.img`
  width: 38%;
  height: auto;
  object-fit: contain;
  @media (max-width: 1024px) {  // tablet 이하 
    width: 50%;
    height: auto;
    object-fit: contain;
  }
`


const Section03 = () => {
  const sectionRef = useScrollAnimation(slideUpAnimation);
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <SectionWrapper ref={sectionRef} tablet={isTablet} mobile={isMobile}>
      <ContsWrapper>
        <ContsLeftWrapper>
          {isMobile ? (
            <MainTitleWrapper>
              <ParagraphL fontWeight='700' textAlign='center'>시공자 찾고, 연락하고, 똑같은 설명하고<br />너무 지겨우셨죠?</ParagraphL>
            </MainTitleWrapper>
          ) : isTablet ? (
            <MainTitleWrapper>
              <TypoH5 fontWeight='600' textAlign='center'>시공자 찾고, 연락하고, 똑같은 설명하고<br />너무 지겨우셨죠?</TypoH5>
            </MainTitleWrapper>
          ) : (
            <MainTitleWrapper>
              <TypoH3 fontWeight='600'>시공자 찾고, 연락하고, 똑같은 설명하고<br />너무 지겨우셨죠?</TypoH3>
            </MainTitleWrapper>
          )}
          {isMobile ? (
            <SubTitleWrapper>
              <Subtitle color='var(--Dark-Blue-600)' fontWeight='400' textAlign='center'>One-Stop<br/>시공자 견적요청 서비스</Subtitle>
              <TypoH5 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>이지 메이트</TypoH5>
            </SubTitleWrapper>
          ) : isTablet ? (
            <SubTitleWrapper>
              <TypoH3 color='var(--Dark-Blue-600)' fontWeight='400' textAlign='center'>One-Stop 시공자 견적요청 서비스</TypoH3>
              <TypoH3 color='var(--Dark-Blue-600)' fontWeight='700' textAlign='center'>이지 메이트</TypoH3>
            </SubTitleWrapper>
          ) : (
            <SubTitleWrapper>
              <TypoH3 color='var(--Dark-Blue-600)' fontWeight='500'>One-Stop 시공자 견적요청 서비스</TypoH3>
              <TypoH2 color='var(--Dark-Blue-600)' fontWeight='700'>이지 메이트</TypoH2>
            </SubTitleWrapper>
          )}
        </ContsLeftWrapper>
        <ContsRightWrapper />
      </ContsWrapper>
    </SectionWrapper>
  );
};

export default Section03;
