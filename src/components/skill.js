import React, {useContext} from "react";
import styled,{ ThemeContext } from "styled-components"
import { lightTheme, Row, Col, RocketLogo, device} from "./Global";
import MyData from "../../mydata.json";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from "@material-ui/core/Grid";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);


const AboveDiv = styled(Row)`
    width: 100%;
    min-height: 99vh;
    position: relative;
    background-color: ${props=>props.theme.background};
    white-space: nowrap;
    overflow-x:scroll;
`

const SkillArea = styled.div`
    font-size: 1.2em;
    margin-top: 15px;
    margin-bottom: 5px;
    width: 100%;    
    padding-right: 10px;
    display:inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props=>props.theme.primary};
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: semi-bold;
`
const HeaderSideSingleCol = styled.div`
    margin: 40px;
    margin-top: 0px;
    margin-right: 20px;
    float: none;
    height: 85%;
    width: 29vw;
    min-width: 320px;
    display: inline-block;
    zoom: 1;
`
const SideContainerSkill = styled.div`
    height: 50%;
    margin-bottom: 5vh;
    width: 100%;
`
const OtherSkillDiv = styled(Row)`
    width: 100%;
    height: 100%;
    background: ${props=>props.theme.dark};
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &: hover {
        box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
    }
`
const OtherSkillHeading = styled.div`
    width: 100%;
    text-align: center;
    color: ${props=>props.theme.primary};
    font-size: 1.2em;
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
`
const OtherSkillDetail = styled.div`
    width: 95%;
    text-align: center;
    color: ${props=>props.theme.primary};
    font-size: 14px;
    white-space: pre-wrap;
    padding: 5px;
    margin-top: 10px;
    font-family: Open-sans, Arial, Helvetica, sans-serif;
`
const TechContainerSkill = styled.div`
    height: 70vh;
    width: 100%;
    min-width: 250px;
    margin-top: 5vh;
    @media ${device.tablet} {
        height: 50vh;
    }
`
const Heading = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    margin-top: 0px;
    color:${props=>props.theme.primary};
    @media ${device.tablet} {
        margin-top: 10vh;
    }
`
const OtherSkill = (props) => {
    return <OtherSkillDiv>
        <img style={{width:"25%",height: "40%",margin:"5%",marginLeft:"10%",marginTop:"0%"}} src={props.imageUrl} />
        <Col style={{justify:"center",width:"100%"}}>
            <OtherSkillHeading>{props.heading}</OtherSkillHeading>
            <OtherSkillDetail>{props.detail}</OtherSkillDetail>
        </Col>
    </OtherSkillDiv>
}
const getOtherSkill = () => {
    let cols = [];
    let otherSkill = MyData.otherSkill;
    for(let i=0; i<otherSkill.length; i+=2){
        let col = <HeaderSideSingleCol>
            <SideContainerSkill>
                <OtherSkill imageUrl={otherSkill[i].imageUrl} heading={otherSkill[i].heading} detail={otherSkill[i].detail}/>
            </SideContainerSkill>
            <SideContainerSkill>
                <OtherSkill imageUrl={otherSkill[i+1].imageUrl} heading={otherSkill[i+1].heading} detail={otherSkill[i+1].detail}/>
            </SideContainerSkill>
        </HeaderSideSingleCol>
        cols.push(col)
    }
    return cols;
}
const getTechArray = () => {
    let rows = [];
    let techSkill = MyData.techSkill
    for(let i =0; i<techSkill.length;i++){
       let singleTech =  <Grid item lg={5} md={5} sm={5} xs={5}>
           <SkillArea>{techSkill[i].techArea}</SkillArea>
           <BorderLinearProgress variant="determinate" value={10*techSkill[i].techStrength} />
        </Grid>

        rows.push(singleTech)
    }
    return rows;
}
const Skill = (props) => {
    const themeContext = useContext(ThemeContext);
    // const onWheel = e => {
    //     e.preventDefault();
    //     const container = scrollRef.current;
    //     const containerScrollPosition = scrollRef.current.scrollLeft;
    //     container.scrollTo({
    //       top: 0,
    //       left: containerScrollPosition + e.deltaY
    //     });
    // };
    // const scrollRef = useRef(null);
    return <AboveDiv>       
        <div>
            <Heading>Technical Skills</Heading>
            <TechContainerSkill>
                <Grid container style={{height: "70vh",width:"99vw"}} spacing={2} alignContent={"space-around"} justify={"space-around"} >
                    {getTechArray()}
                </Grid>
            </TechContainerSkill>
        </div>
        <div>
            <Heading>My Skills</Heading>
            <Row style={{marginRight:"30px",height:"70vh"}}>
                {getOtherSkill()}
            </Row>
        </div>
    </AboveDiv>
}

export default Skill
