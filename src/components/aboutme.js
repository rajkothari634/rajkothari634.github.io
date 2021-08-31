import React from "react";
import styled from "styled-components"
import { lightTheme, device, Row, Col} from "./Global";
import aboutmebg from "../images/ic_aboutmebg.svg"

const AboutMeDiv = styled(Row)`
    width: 99vw;
    min-height: 99vh;
    position: relative;
    background-color: ${lightTheme.background};
`
const Heading = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2.9em;
    color:${lightTheme.light};
    margin-top: 20px;
    min-width: 300px;
`
const Detail = styled.p`
    font-family: Helvetica;
    font-weight: regular;
    font-size: 1.0em;
    margin-top: 0px;
    color:${lightTheme.primary};
`
const AboutMeBackImg = styled.img`
    width: 60vw;
    position: absolute;
    top: 20px;
    left: 20vw;
    display: none;
    @media ${device.tablet} {
        bottom: 0px;
        left: 0px;
        display: inline;
    }
`
const AboutMeDetail = styled(Col)`
    width: 80vw;
    position: absolute;
    justify-content: center;
    align-items: flex-start;
    bottom: 20vh;
    left: 5vw;
    @media ${device.tablet} {
        width: 30vw;
        bottom: 25vh;
        left: 60vw;
    }
`
const AboutMe = (props) => {
    return <AboutMeDiv>
        <AboutMeBackImg  src={aboutmebg} />
        <AboutMeDetail>
            <Heading>About Me</Heading>
            <Detail>I am a 4th year student pursuing B.Tech in Computer Sceince and Engineering, National Institute of Technology, Patna. I am a passionate developer. I am experienced in developing hybrid & native mobile apps, web applications and machine learning. </Detail>
            <Detail>I am a community builder and I am Vice President in Hackslash Developers Club NIT Patna and Machine Learning Lead in DSC NIT Patna. I always support Open Source and spreading knowldege through mentoring and tech blogs.</Detail>
        </AboutMeDetail>
    </AboutMeDiv>
}

export default AboutMe;
