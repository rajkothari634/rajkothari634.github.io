import React from "react";
import styled from "styled-components"
import { lightTheme, darkTheme, device, Row, Col,LinkedInLogo, InstaLogo ,GithubLogo} from "./Global";
import MyData from "../../mydata.json";
import BackBg from "../images/ic_backgeneral.svg"
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
    top: 50px;
    left: 6vw;
    height: 30px;
    width: 30vw;
`
const ResumeDiv = styled(Row)`
    position: absolute;
    justify-content: center;
    align-items: center;
    top:50px;
    right: 6vw;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-size:20px;
    font-weight: bold;
    transition-duration: 0.4s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: ${lightTheme.dark};
    color: ${lightTheme.primary};
    cursor: pointer;
    &:hover {
        background-color: ${lightTheme.primary};
        color: ${lightTheme.dark};
    }
`
const socialMediaClick = (link)=> {
    console.log(link);
    window.open(link);
}
const GeneralBackDiv = styled.div`
    width: 50vw;
    height: 71vh;
    position: absolute;
    top: 28vh;
    right: 0px;
    
`

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
    width: 70vw;
    left: 15vw;
    top: 45vh;
    @media ${device.laptop} {
        left: 10vw;
        width: 35vw;
    }
`

const HelloPara = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 55px;
    color:${lightTheme.secondary};
    margin: 20px;
    text-align: right;
    @media ${device.laptop} {
        text-align: left;
    }
`
const Intro = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 55px;
    color:${lightTheme.light};
    margin: 20px;
    text-align: right;
    @media ${device.laptop} {
        text-align: left;
    }
`
const IntroDetail = styled.p`
    font-family: Helvetica;
    font-weight: regular;
    font-size: 25px;
    color:${lightTheme.primary};
    margin: 20px; 
    margin-top: 25px; 
    text-align: right;
    @media ${device.laptop} {
        text-align: left;
    }
`

const GeneralBackBg = styled.img`
    right: 15vw;
    width: 70vw;
    height: 60vh;
    top: 10vh;
    position: absolute;
    @media ${device.laptop} {
        width: 50vw;
        height: 71vh;
        top: 28vh;
        right: 0px;
    }
`
const General = (props) => {
    return <GeneralDiv>
        <SocialDiv>
            <MediaLogos/>
        </SocialDiv>
        <ResumeDiv>Resume</ResumeDiv>
        <GeneralBackBg src={BackBg} />
        <HelloDiv>
            <HelloPara>Hello!</HelloPara>
            <Intro>I am</Intro>
            <Intro>Raj Kothari</Intro>
            <IntroDetail>I am Passionate Developer.</IntroDetail>
        </HelloDiv>
    </GeneralDiv>
}

export default General;