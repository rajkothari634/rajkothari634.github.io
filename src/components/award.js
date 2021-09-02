import React, {useContext} from "react";
import styled,{ ThemeContext } from "styled-components"
import { lightTheme, Col, device} from "./Global";
import graduation from "../images/ic_graduation.svg"
import tabletennis from "../images/ic_tabletennis.svg"
import Grid from "@material-ui/core/Grid";


const ItemDiv = styled(Col)`
    width: 100%;
    height: 330px;
    align-items: center;
    background: ${props=>props.theme.dark};
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &: hover {
        box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
    }
`
const AwardDiv = styled.div`
    width: 100vw;
    min-height: 98vh;
    background-color: ${props => props.theme.background};
    top: 288vh;
`
const Heading = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 35px;
    text-align: center;
    color:${props => props.theme.primary};
    margin: 20px;
    margin-top: 10px;
    @media ${device.tablet} {
        margin-top: 80px;
        margin-bottom: 140px;
    }
`
const ItemTitle = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    color:${props=>props.theme.primary};
    font-weight: bold;
    text-align: center;
    margin: 25px;
    margin-bottom: 10px;
`
const ItemDetail = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-size: 1em;
    color:${props=>props.theme.primary};
    text-align: center;
    margin: 25px;
    margin-bottom: 10px;    
`
const Award = (props) => {
    const themeContext = useContext(ThemeContext)
    return <AwardDiv>
        <Heading>Award</Heading>
        <Grid container spacing={3} style={{marginTop: "10px",marginBottom: "20px"}} justify={"space-around"}>
            <Grid item lg={3} md={4} sm={7} xs={11}  >
                <ItemDiv>
                    <img src={graduation} style={{width: "120px",height: "120px"}} />
                    <ItemTitle>MMVY Scholarship</ItemTitle>
                    <ItemDetail>Get qualified for MukhyaMantri Vidhya Yojna</ItemDetail>
                </ItemDiv>
            </Grid>
            <Grid  item lg={3} md={4} sm={7} xs={11}  >
            <ItemDiv>
                    <img src={tabletennis} style={{width: "120px",height: "120px"}} />
                    <ItemTitle>Table Tennis</ItemTitle>
                    <ItemDetail>Silver Medalist in Intramural National Institute of Technology, Patna</ItemDetail>
                </ItemDiv>
            </Grid>
        </Grid>
    </AwardDiv>
}

export default Award