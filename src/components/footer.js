import React from "react";
import styled from "styled-components";
import { lightTheme, darkTheme, device,MediumLogo, Row, Col,LinkedInLogo, InstaLogo ,GithubLogo} from "./Global";
import MyData from "../../mydata.json";
import Grid from "@material-ui/core/Grid";

const ConnectLine = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-size: 1em;
    text-align: center;
    margin: 25px;
    margin-bottom: 10px;    
`
const SocialDiv = styled(Row)`
    spacing: 3;
    justify-content: center;
    height: 30px;
    width: 30vw;
`
const socialMediaClick = (link)=> {
    console.log(link);
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


const FooterDiv = styled(Col)`
    width: 99vw;
    height: 30px;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #cacaca;
    background-color: #ffffff;
`


const Footer = (props) => {
    return <FooterDiv>
        <SocialDiv>
            <MediaLogos/>
        </SocialDiv>
    </FooterDiv>
}
export default Footer;