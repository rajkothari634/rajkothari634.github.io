import React, {useRef,useContext} from "react";
import styled from "styled-components"
import { lightTheme,Row, Col, device} from "./Global";
import CommunityBg from "../images/ic_communitybg.svg"
const UpperDiv = styled.div`
    width: 100%;
    height: 97vh;
    scroll-snap-align: center;
    scroll-snap-align: center;
    position: relative;
    background-color: ${props=>props.theme.background};
`
const Heading = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: regular;
    font-size: 30px;
    padding-left: 20px;
    margin-top: 30px;
    color:${props=>props.theme.primary};
    @media ${device.tablet} {
        bottom: 0px;
        left: 0px;
        padding-left: 100px;
        margin-top: 80px;
    }
`

const CommunityImg = styled.img`
    position: absolute;
    top: 40px;
    left: 0px;
    width: 98vw;
    @media ${device.tablet} {
        bottom: 0px;
        left: 0px;
        top: 80px;
        width: 45vw;
        display: inline;
        padding-left: 100px;
        margin-top: 100px;
    }
`
const HeaderContainer = styled(Row)`
    height:80vh;
    width: 99vw;
    white-space: nowrap;
    position: absolute;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    display: flex;
    bottom: 0px;
    left: 0px;
    align-items: center;
    padding-bottom: 20px;
`
const CommunityInfoDiv = styled(Col)`
    min-width: 300px;
    height: 98%;
    width: 40vw;
    margin-left: 5vw;
    margin-right: 5vw;
    align-items: flex-start;
    scroll-snap-align: end;
    @media ${device.tablet} {
        margin-left: 70vw;
        align-items: flex-end;
    }
`
const RespDetail = styled.p`
    font-size: 16px;
    color: ${props=>props.theme.primary};
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    width: 40vw;
    height: 20px;
    margin: 2px;
`
const RespDate = styled.p`
    font-size: 12px;
    color: ${props=>props.theme.primary};
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    width: 40vw;
    height: 20px;
    margin: 2px;
`
const RespDetailHeader = styled.p`
    font-size: 16px;
    color: ${props=>props.theme.primary};
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    width: 40vw;
    margin: 2px;
    margin-top: 50px;
`
const RespImg = styled.img`
    width: 250px;
    margin-bottom: 10%;
    border-radius: 10px;
`
const Community = (props) => {
    // const onWheel = e => {
    //     e.preventDefault();
    //     const container = scrollRef.current;
    //     const containerScrollPosition = scrollRef.current.scrollLeft;
    //     console.log("check")
    // console.log(container);
    // console.log(containerScrollPosition);
    //     container.scrollTo({
    //       top: 0,
    //       left: containerScrollPosition + e.deltaY
    //     });
    //   };
    
    //   const scrollRef = useRef(null);

    return <UpperDiv >
        <Heading>Building Community</Heading>
        <CommunityImg src={CommunityBg} />
        {/* <HeaderContainer ref={scrollRef} onWheel={onWheel}> */}
        <HeaderContainer>
            <CommunityInfoDiv>
                <RespImg src={"https://avatars0.githubusercontent.com/u/71489907?s=200&v=4"} />
                <RespDetailHeader>{"Machine Learning Lead"}</RespDetailHeader>
                <RespDetail>{"Developer Student Club"}</RespDetail>
                <RespDetail>{"National Institute of Technology"}</RespDetail>
                <RespDate>{"JULY 2020 - APRIL 2021"}</RespDate>
            </CommunityInfoDiv>
            <CommunityInfoDiv>
                <RespImg src={"https://avatars2.githubusercontent.com/u/53945279?s=200&v=4"} />
                <RespDetailHeader>{"Vice President"}</RespDetailHeader>
                <RespDetail>{"Hackslash"}</RespDetail>
                <RespDetail>{"National Institute of Technology"}</RespDetail>
                <RespDate>{"JUNE 2020 - APRIL 2021"}</RespDate>
            </CommunityInfoDiv>
            <CommunityInfoDiv>
                <RespImg src={"https://avatars2.githubusercontent.com/u/53945279?s=200&v=4"} />
                <RespDetailHeader>{"Secretary"}</RespDetailHeader>
                <RespDetail>{"Hackslash"}</RespDetail>
                <RespDetail>{"National Institute of Technology"}</RespDetail>
                <RespDate>{"AUGUST 2019 - JUNE 2020"}</RespDate>
            </CommunityInfoDiv>      
        </HeaderContainer>
       
    </UpperDiv>
}

export default Community;