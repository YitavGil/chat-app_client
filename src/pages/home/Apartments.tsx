import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Apartment } from '../../components/apartment';
import { ISublet } from '../../typings/apartment';

const NewApartmentsContainer = styled.div`
    ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
    `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const ApartmentsContainer = styled.div`
    ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
    `}
`

const Apartments = () => {

  const testHouse: ISublet = {
    name: "Small place for a week rent",
    thumbnailSrc: "https://www.bezmirno.com/wp-content/uploads/2019/05/06.1.-Tiny-Apartments-kitchen.jpg",
    weeklyPrice: 400,
    monthlyPrice: 1500,
    location: "Rosh Ha'ayin",
    owner: "hesus",
    description: "Really cool home Yo",
    roomsNumber: 2,
    haveParking:true,
    assetType: "Apartment"

  }
  const testHouse2: ISublet = {
    name: "Heavenly shack for couples",
    thumbnailSrc: "https://i.pinimg.com/originals/1f/47/ac/1f47ac14491e2020535fcc0569690b66.jpg",
    weeklyPrice: 1400,
    monthlyPrice: 2000,
    location: "Tel-Aviv",
    owner: "Johm",
    description: "Enjoy pastoral scenery",
    roomsNumber: 1,
    haveParking:true,
    assetType: "Apartment"

  }
  return (
    <NewApartmentsContainer>
        <Title>Top New Deals</Title>
        <ApartmentsContainer>
            <Apartment {...testHouse} />
            <Apartment {...testHouse2} />
        </ApartmentsContainer>
    </NewApartmentsContainer>
  )
}

export default Apartments