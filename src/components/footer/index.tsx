import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

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

const Footer = () => {
  return (
    <FooterContainer>
        Footer
    
    </FooterContainer>
  )
}

export default Footer