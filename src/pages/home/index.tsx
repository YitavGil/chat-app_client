import React from "react";
import styled from 'styled-components';
import tw from "twin.macro";
import BookCard from "../../components/bookCard";
import { Navbar } from "../../components/navbar";
import TopSection from "./TopSection";
import { Marginer } from "../../components/margeiner";
import BookingSteps from "./BookingSteps";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`
const HomePage = () => {
  return (
    <PageContainer>
        <Navbar />
        <TopSection />
        <Marginer direction="vertical" margin="4rem"/>
        <BookCard />
        <Marginer direction="vertical" margin="10rem"/>
        <BookingSteps />
    </PageContainer>
  )
}

export default HomePage