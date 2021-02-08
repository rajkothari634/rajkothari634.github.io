import React from "react";
import styled from "styled-components"
import { lightTheme, darkTheme, device, Row, Col,LinkedInLogo, InstaLogo ,GithubLogo} from "./Global";
import MyData from "../../mydata.json";
import aboutmebg from "../images/ic_aboutmebg.svg"

const AboutMeDiv = styled(Row)`
    width: 100vw;
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
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: regular;
    font-size: 1.1em;
    margin-top: 0px;
    color:${lightTheme.primary};
    min-width: 300px;
`

const AboutMeBackImg = styled.img`
    width: 60vw;
    position: absolute;
    top: 20px;
    left: 20vw;
    @media ${device.laptop} {
        bottom: 0px;
        left: 0px;

    }
`
const AboutMeDetail = styled(Col)`
    width: 80vw;
    position: absolute;
    min-width: 300px;
    justify-content: center;
    align-items: flex-start;
    bottom: 10vh;
    left: 5vw;
    @media ${device.laptop} {
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
            <Detail>I am a 3rd year student pursuing B.Tech in Computer Sceince and Engineering, National Institute of Technology, Patna. I am a passionate developer. I am experienced in developing hybrid & native mobile apps, web applications and machine learning. </Detail>

            <Detail>I am a community builder and I am Vice President in Hackslash Developers Club NIT Patna and Machine Learning Lead in DSC NIT Patna. I always support Open Source and spreading knowldege through mentoring and tech blogs.</Detail>

            {/* <Detail>I’m a second-year student at NIT, Patna pursuing B.Tech in Computer Science and Engineering.

Being a tech-enthusiast, I love to explore new technologies and leverage them to solve real-life problems. I am a detail-oriented developer with diverse experience in developing web applications, hybrid & native mobile apps and cloud computing solutions.
</Detail><Detail>
I am a campus leader at HackSlash and I’m driven by the will to create an impact and encourage diversity in communities.</Detail> */}
        </AboutMeDetail>
    </AboutMeDiv>
}

export default AboutMe;