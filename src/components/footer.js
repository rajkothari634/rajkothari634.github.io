import React, {useContext} from "react";
import styled,{ ThemeContext } from "styled-components"
import { MediumLogo, Row, Col,LinkedInLogo, InstaLogo ,GithubLogo} from "./Global";
import MyData from "../../mydata.json";

const SocialDiv = styled(Row)`
    spacing: 3;
    justify-content: center;
    height: 30px;
    width: 30vw;
`
const socialMediaClick = (link)=> {
    window.open(link);
}
const MediaLogos = (props) => {
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
const FooterDiv = styled(Col)`
    width: 100%;
    height: 30px;
    padding: 15px;
    justify-content: center;
    scroll-snap-align: center;
    align-items: center;
    border-top: 1px solid #cacaca;
    background-color: ${props=>props.theme.dark};
`

const Footer = (props) => {
    const themeContext = useContext(ThemeContext);
    return <FooterDiv>
        <SocialDiv>
            <MediaLogos color={themeContext.primary}/>
        </SocialDiv>
    </FooterDiv>
}
export default Footer;