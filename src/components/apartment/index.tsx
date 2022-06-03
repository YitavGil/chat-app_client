import {
  faAddressCard,
  faBuilding,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ISublet } from "../../typings/apartment";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IApartmentProps extends ISublet {}

const ApartmentContainer = styled.div`
  width: 16.5rem;
  min-height: 22.2rem;
  max-height: 22.2;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
    `}
`;

const ApartmentThumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ApartmentTitle = styled.h3`
  ${tw`
        text-base
        font-bold
        text-black
        mt-1
        mb-1
    `}
`;

const PricesContainer = styled.div`
  ${tw`
        w-full
        flex
        justify-start
        mt-3
    `}
`;

const WeeklyPrice = styled.h5`
  ${tw`
        text-red-500
        font-bold
        text-sm
        mr-3
    `}
`;

const MonthlyPrice = styled.h5`
  ${tw`
        text-gray-500
        font-bold
        text-sm
    `}
`;

const SmallIcon = styled.span`
  ${tw`
        text-gray-400
        text-sm
        mr-1
    `}
`;

const DetailsContainer = styled.div`
  ${tw`
        flex
        w-full
        justify-between
    `}
`;

const ApartmentDetail = styled.span`
  ${tw`
        flex
        items-center
        justify-between
    `}
`;

const ApartmentInfo = styled.h6`
  ${tw`
        text-gray-400
        text-xs
    `}
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
        flex
        bg-gray-300
        mt-2
        mb-2
    `}
`;

const RentButton = styled(Button)`
  ${tw`
        min-w-full
        mt-5
    `}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
        inline-flex
        text-xs
        font-thin
    `}
`;

export function Apartment(props: ISublet) {
  const {
    name,
    thumbnailSrc,
    weeklyPrice,
    monthlyPrice,
    location,
    owner,
    description,
    roomsNumber,
    haveParking,
  } = props;

  return (
    <ApartmentContainer>
      <ApartmentThumbnail>
        <img src={thumbnailSrc} alt="thumbnail" />
      </ApartmentThumbnail>
      <ApartmentTitle>{name}</ApartmentTitle>
      <PricesContainer>
        <WeeklyPrice>
          {weeklyPrice}₪<SmallText>/Week</SmallText>
        </WeeklyPrice>
        <MonthlyPrice>
          {monthlyPrice}₪<SmallText>/Month</SmallText>
        </MonthlyPrice>
        <ApartmentInfo>Has Parking! {haveParking}</ApartmentInfo>
      </PricesContainer>
      <Seperator />
      <DetailsContainer>
        <ApartmentDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faBuilding} />
          </SmallIcon>
          <ApartmentInfo>{location}</ApartmentInfo>
        </ApartmentDetail>
        <ApartmentDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faPeopleGroup} />
          </SmallIcon>
          <ApartmentInfo>{roomsNumber}</ApartmentInfo>
        </ApartmentDetail>
        <ApartmentDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faAddressCard} />
          </SmallIcon>
          <ApartmentInfo>{description}</ApartmentInfo>
        </ApartmentDetail>
      </DetailsContainer>
      <RentButton text="Rent Now" />
    </ApartmentContainer>
  );
}
