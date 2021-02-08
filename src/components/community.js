import React from "react";
import styled from "styled-components"
import { lightTheme,Row, Col} from "./Global";
import CommunityBg from "../images/ic_communitybg.svg"
const UpperDiv = styled.div`
    width: 98vw;
    height: 97vh;
    position: relative;
    background-color: ${lightTheme.background};
`
const Heading = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: regular;
    font-size: 30px;
    padding-left: 100px;
    margin-top: 100px;
    color:${lightTheme.primary};
`
const CommunityImg = styled.img`
    position: absolute;
    top: 80px;
    left: 0px;
    width: 45vw;
`
const HeaderContainer = styled(Row)`
    height:80vh;
    width: 97vw;
    white-space: nowrap;
    position: absolute;
    bottom: 0px;
    left: 0px;
    overflow-x:scroll;
    align-items: center;
    padding-bottom: 20px;
`

const CommunityInfoDiv = styled(Col)`
    min-width: 500px;
    height: 98%;
    width: 40vw;
    margin-left: 60vw;
    align-items: flex-end;
`
const RespDetail = styled.p`
    font-size: 16px;
    font-color: ${lightTheme.primary};
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    width: 40vw;
    height: 20px;
    margin: 2px;
`
const RespDate = styled.p`
    font-size: 12px;
    font-color: ${lightTheme.primary};
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    width: 40vw;
    height: 20px;
    margin: 2px;
`
const RespDetailHeader = styled.p`
    font-size: 16px;
    font-color: ${lightTheme.primary};
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    width: 40vw;
    height: 20px;
    margin: 2px;
    margin-top: 50px;
`
const RespImg = styled.img`
    width: 250px;
    margin-bottom: 10%;
    border-radius: 10px;
`
const Community = () => {
    return <UpperDiv>
        <Heading>Building Community</Heading>
        <CommunityImg src={CommunityBg} />
        <HeaderContainer>
            <CommunityInfoDiv>
                <RespImg src={"https://avatars0.githubusercontent.com/u/71489907?s=200&v=4"} />
                <RespDetailHeader>{"Machine Learning Lead"}</RespDetailHeader>
                <RespDetail>{"Developer Student Club"}</RespDetail>
                <RespDetail>{"National Institute of Technology"}</RespDetail>
                <RespDate>{"JULY 2020 - Present"}</RespDate>
            </CommunityInfoDiv>
            <CommunityInfoDiv>
                <RespImg src={"https://avatars2.githubusercontent.com/u/53945279?s=200&v=4"} />
                <RespDetailHeader>{"Vice President"}</RespDetailHeader>
                <RespDetail>{"Hackslash"}</RespDetail>
                <RespDetail>{"National Institute of Technology"}</RespDetail>
                <RespDate>{"JUNE 2020 - Present"}</RespDate>
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