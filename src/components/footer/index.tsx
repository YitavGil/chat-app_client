import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: #45535d;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
  `}
`

const Footer = () => {
  return (
    <FooterContainer>
      <AboutContainer>
        <Logo color='white' />
      </AboutContainer>
    </FooterContainer>
  )
}

export default Footer