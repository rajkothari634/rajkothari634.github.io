import React, {useContext} from "react";
import styled,{ ThemeContext } from "styled-components"
import {device, Row} from "./Global";
import MyData from "../../mydata.json";
import BackBg from "../images/ic_backgeneral.svg"
import Typewriter from 'typewriter-effect';
import Header from "../components/header";

const GeneralDiv = styled.div`
    width: 100%;
    height: 99vh;
    background-color: ${props => props.theme.dark};
`

const HelloDiv = styled.div`
    position: absolute;
    width: 90vw;
    right: 1vw;
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
    top: 20px;
    position: absolute;
    @media ${device.tablet} {
        width: 50vw;
        height: 71vh;
        top: 28vh;
        right: 0px;
    }
`

const General = (props) => {
    const themeContext = useContext(ThemeContext)
    return <GeneralDiv>
        <GeneralBackBg src={BackBg} />
        <Header  toggleDarkMode={props.toggleDarkMode} darkMode={props.darkMode}/>
        
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
