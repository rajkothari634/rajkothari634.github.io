import React, {useContext} from "react";
import styled,{ ThemeContext } from "styled-components"
import { device, Row, Col} from "./Global";
import aboutmebg from "../images/ic_aboutmebg.svg"

const AboutMeDiv = styled(Row)`
    width: 99vw;
    min-height: 99vh;
    position: relative;
    background-color: ${props => props.theme.background};
`
const Heading = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2.9em;
    color:${props => props.theme.light};
    margin-top: 20px;
    min-width: 300px;
`
const Detail = styled.p`
    font-family: Helvetica;
    font-weight: regular;
    font-size: 1.0em;
    margin-top: 0px;
    color:${props => props.theme.primary};
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
    
    const themeContext = useContext(ThemeContext)
    return <AboutMeDiv>
        <AboutMeBackImg  src={aboutmebg} />
        <AboutMeDetail>
            <Heading>About Me</Heading>
            <Detail>I am a final(4th) year student pursuing B.Tech in Computer Sceince and Engineering, National Institute of Technology, Patna. I am a passionate developer and software engineering is my dream job.</Detail>
            <Detail>I have worked in two companies as a Software Engineer Intern, Namely Arcatron Mobility(For 6 months) and Earnest Fintech(For 3 months). I am very active in the developers' community. I am co-founder of Hackslash Developers Club, in the National Institute of Technology, Patna, India and have served for 3+years as mentor and Vice President. I am also the Lead of the Machine Learning Department in the Google Developer Student Club, NIT Patna for 1 year. </Detail>
        </AboutMeDetail>
    </AboutMeDiv>
}

export default AboutMe;