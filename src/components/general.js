import React, {useContext} from "react";
import styled,{ ThemeContext } from "styled-components"
import "../components/index.css"
import { GithubLogo, MediumLogo, device, Row,LinkedInLogo, InstaLogo} from "./Global";
import MyData from "../../mydata.json";
import BackBg from "../images/ic_backgeneral.svg"
import Typewriter from 'typewriter-effect';

const ThemeIcon = (props) => {
    return <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.75 2.5H21.25V8.7H18.75V2.5Z" fill={props.color}/>
        <path d="M27.1084 11.1125L31.4921 6.72876L33.2596 8.49751L28.8759 12.8813L27.1084 11.1125Z" fill={props.color}/>
        <path d="M31.2998 18.75H37.4998V21.25H31.2998V18.75Z" fill={props.color}/>
        <path d="M27.1162 28.8788L28.8837 27.1113L33.2675 31.4963L31.5 33.2625L27.1162 28.8788Z" fill={props.color}/>
        <path d="M18.75 31.3H21.25V37.5H18.75V31.3Z" fill={props.color}/>
        <path d="M6.74609 31.5025L11.1298 27.1188L12.8973 28.8863L8.51359 33.2713L6.74609 31.5025Z" fill={props.color}/>
        <path d="M2.5 18.75H8.7V21.25H2.5V18.75Z" fill={props.color}/>
        <path d="M6.7373 8.50374L8.50731 6.73749L12.8911 11.1225L11.1236 12.89L6.7373 8.50374Z" fill={props.color}/>
        <path
            d="M20 12.5C18.5166 12.5 17.0666 12.9399 15.8332 13.764C14.5999 14.5881 13.6386 15.7594 13.0709 17.1299C12.5032 18.5003 12.3547 20.0083 12.6441 21.4632C12.9335 22.918 13.6478 24.2544 14.6967 25.3033C15.7456 26.3522 17.082 27.0665 18.5368 27.3559C19.9917 27.6453 21.4997 27.4968 22.8701 26.9291C24.2406 26.3614 25.4119 25.4001 26.236 24.1668C27.0601 22.9334 27.5 21.4834 27.5 20C27.5 18.0109 26.7098 16.1032 25.3033 14.6967C23.8968 13.2902 21.9891 12.5 20 12.5Z"
            fill={props.color}/>
    </svg>

}

const GeneralDiv = styled.div`
    width: 100%;
    height: 97vh;
    background-color: ${props => props.theme.dark};
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
    background-color: ${props => props.theme.dark};
    color: ${props => props.theme.primary};
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.dark};
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
const MediaLogos = (props) => {
    console.log(props.color);
    let socialMedia = MyData.socialMedia;
    let rows = [];
    for(let key in socialMedia){
        switch(key){
            case "insta":
                rows.push(<div style={{margin: "10px",cursor: "pointer"}} onClick={() =>{socialMediaClick(socialMedia[key])}}>
                    <InstaLogo color={props.color}/>
                </div>)
                break;
            case "github":
                rows.push(<div style={{margin: "10px",cursor: "pointer"}} onClick={() => {socialMediaClick(socialMedia[key])}}>
                    <GithubLogo color={props.color}/>
                </div>)
                break;
            case "linkedin":
                rows.push(<div style={{margin: "10px",cursor: "pointer"}} onClick={() => {socialMediaClick(socialMedia[key])}}>
                    <LinkedInLogo color={props.color}/>
                </div>)
                break;   
            case "medium":
                rows.push(<div style={{margin: "10px",cursor: "pointer"}} onClick={() => {socialMediaClick(socialMedia[key])}}>
                    <MediumLogo color={props.color}/>
                </div>)  
                break;
            default :
                rows.push(<div style={{margin: "10px",cursor: "pointer"}} onClick={() => {socialMediaClick(socialMedia[key])}}>
                    <InstaLogo color={props.color}/>
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
    color:${props => props.theme.secondary};
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
    color:${props => props.theme.light};
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
    color:${props => props.theme.primary};
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
    const themeContext = useContext(ThemeContext)
    return <GeneralDiv>
        <SocialDiv>
            <MediaLogos color={themeContext.primary}/>
            
            
        </SocialDiv>
        <div style={{ position: "absolute",top: "1vh",marginTop: "80px",marginLeft: "7px",left: "8vw",cursor: "pointer" }} onClick={() => {
                props.toggleDarkMode(!props.darkMode)
            }}>
                <ThemeIcon color={themeContext.primary}/>
        </div>
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
