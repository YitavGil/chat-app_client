import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';

import subletImg from '../../assets/images/sublet.jpg'

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const SubletContainer = styled.div`
  width: auto;
  height: 15rem;
  margin-left: -10px;
  img {
    width: auto;
    height: 80%;
    border-radius: 10px;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
margin-top: -2rem;
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    md:mb-12
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;


const AboutUs = () => {
  return (
    <AboutUsContainer>
        <SubletContainer>
            <img src={subletImg} alt="sublet" />
        </SubletContainer>
        <InfoContainer>
            <Title>Easy Experience With Our Rental Deals</Title>
            <InfoText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis optio in harum hic dolor modi ullam, inventore consectetur minima sunt deleniti itaque. Cum eligendi, non soluta autem dignissimos et?
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>
  )
}

export default AboutUs