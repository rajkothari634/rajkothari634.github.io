import React from "react";
import styled from "styled-components"
import { lightTheme, MediumLogo, device, Row,LinkedInLogo, InstaLogo ,GithubLogo} from "./Global";
import MyData from "../../mydata.json";
import BackBg from "../images/ic_backgeneral.svg"
import Typewriter from 'typewriter-effect';

const GeneralDiv = styled.div`
    width: 98vw;
    height: 97vh;
    background-color: ${lightTheme.dark};
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border:1px solid black;
    }
`
const SocialDiv = styled(Row)`
    position: absolute;
    spacing: 3;
    top: 1vh;
    left: 8vw;
    width: 30vw;
    @media ${device.tablet} {
        top: 5vh;
        right: 6vw;
    }
`
const ResumeDiv = styled(Row)`
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 2vh;
    right: 8vw;
    border-radius: 20px;
    width: 100px;
    height: 30px;
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-size: 18px;
    transition-duration: 0.4s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: ${lightTheme.dark};
    color: ${lightTheme.primary};
    cursor: pointer;
    &:hover {
        background-color: ${lightTheme.primary};
        color: ${lightTheme.dark};
    }
    @media ${device.tablet} {
        font-weight: bold;
        width: 150px;
        height: 40px;
        top: 5vh;
        right: 6vw;
    }
`
const socialMediaClick = (link)=> {
    window.open(link);
}
const MediaLogos = () => {
    let socialMedia = MyData.socialMedia;
    let rows = [];
    for(let key in socialMedia){
        switch(key){
            case "insta":
                rows.push(<div style={{margin: "10px",cursor: "pointer"}} onClick={() =>{socialMediaClick(socialMedia[key])}}>
                    <InstaLogo/>
                </div>)
                break;
            case "github":
                rows.push(<div style={{margin: "10px",cursor: "pointer"}} onClick={() => {socialMediaClick(socialMedia[key])}}>
                    <GithubLogo/>
                </div>)
                break;
            case "linkedin":
                rows.push(<div style={{margin: "10px",cursor: "pointer"}} onClick={() => {socialMediaClick(socialMedia[key])}}>
                    <LinkedInLogo/>
                </div>)
                break;   
            case "medium":
                rows.push(<div style={{margin: "10px",cursor: "pointer"}} onClick={() => {socialMediaClick(socialMedia[key])}}>
                    <MediumLogo/>
                </div>)  
                break;
            default :
                rows.push(<div style={{margin: "10px",cursor: "pointer"}} onClick={() => {socialMediaClick(socialMedia[key])}}>
                    <InstaLogo/>
                </div>)
        }
    }
    return rows
}
const HelloDiv = styled.div`
    position: absolute;
    width: 90vw;
    left: 5vw;
    top: 45vh;
    @media ${device.tablet} {
        left: 7vw;
        width: 35vw;
    }
`
const HelloPara = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2.5em;
    color:${lightTheme.secondary};
    margin: 20px;
    text-align: right;
    @media ${device.tablet} {
        text-align: left;
        font-size: 3.3em;
    }
`
const Intro = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2.0em;
    color:${lightTheme.light};
    margin: 20px;
    text-align: right;
    @media ${device.tablet} {
        text-align: left;
        font-size: 2.5em;
    }
`
const IntroDetail = styled.div`
    font-family: Helvetica;
    font-weight: regular;
    font-size: 1.2em;
    letter-spacing: 3px;
    color:${lightTheme.primary};
    margin: 20px; 
    margin-top: 25px; 
    text-align: right;
    @media ${device.tablet} {
        text-align: left;
        font-size: 1.6em;
    }
`
const GeneralBackBg = styled.img`
    right: 5vw;
    width: 95vw;
    height: 50vh;
    top: 0px;
    position: absolute;
    @media ${device.tablet} {
        width: 50vw;
        height: 71vh;
        top: 28vh;
        right: 0px;
    }
`
const viewResume = () => {
    window.open("https://drive.google.com/file/d/1XzaEV9ulCfUX8C3f0nAYElYvyp576Q2E/view?usp=sharing")
}
const General = (props) => {
    return <GeneralDiv>
        <SocialDiv>
            <MediaLogos/>
        </SocialDiv>
        <ResumeDiv onClick={viewResume}>Resume</ResumeDiv>
        <GeneralBackBg src={BackBg} />
        <HelloDiv>
            <HelloPara>Hello!</HelloPara>
            <Intro>I am</Intro>
            <Intro>Raj Kothari</Intro>
            <IntroDetail>
                <Typewriter
                    options={{
                        strings: ["I am a Passionate Developer.", "I am a Tech enthusiast person.","MERN Stack, Mobile Development and Machine Learning are my area of experience.", "I am a Tech blog writer.","I am a Table Tennis Player."],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </IntroDetail>
        </HelloDiv>
    </GeneralDiv>
}

export default General;
