import React from "react";
import styled from "styled-components"
import { lightTheme, Row, Col} from "./Global";
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


const AboveDiv = styled.div`
    width: 98vw;
    min-height: 98vh;
`
const SkillArea = styled.p`
    font-size: 18px;
    font-color: ${lightTheme.primary};
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: semi-bold;
`

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



//{/* <BorderLinearProgress variant="determinate" value={50} /> */}
const SkillDiv = styled.div`
    width: 98vw;
    height: 100vh;
    position : absolute;
    background-color: ${lightTheme.dark};
    top: 288vh;
`

const HeaderContainer = styled(Row)`
    height:98vh;
    white-space: nowrap;
    position: relative;
    overflow-x:scroll;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
`
const HeaderSideSingleCol = styled.div`
    margin: 40px;
    margin-top: 0px;
    margin-right: 20px;
    float: none;
    height: 80%;
    width: 350px;
    display: inline-block;
    zoom: 1;
`
const SideContainerSkill = styled.div`
    height: 45%;
    margin-bottom: 5vh;
    width:350px;
    margin-top: 5vh;
`
const OtherSkillDiv = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid ${lightTheme.primary50};
`

const OtherSkill = (props) => {
    return <OtherSkillDiv></OtherSkillDiv>
}


const Heading = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    color:${lightTheme.primary};
`


const getOtherSkill = () => {
    let cols = [];
    let otherSkill = MyData.otherSkill;
    for(let i=0; i<otherSkill.length; i+=2){
        let col = <HeaderSideSingleCol>
            <SideContainerSkill>
                <OtherSkill/>
            </SideContainerSkill>
            <SideContainerSkill>
            <OtherSkill/>
            </SideContainerSkill>
        </HeaderSideSingleCol>
        cols.push(col)
    }
    return cols;
}


const Skill = (props) => {
    return <AboveDiv>
        {/* <img src={blogBg} style={{marginLeft:"8vw",position: "absolute",width:"90vw",height:"90vh"}}/> */}
        <HeaderContainer>
            {/* <HeaderSideSingleCol style={{marginRight:"12%",width:"700px"}}>
                <Heading>Technical Skills</Heading>
                <SideContainerSkill style={{width:"700px",height:"50vh",marginTop:"5%"}}>
                    <Grid container spacing={2} alignContent={"center"} justify={"space-around"} >
                        {getTechArray()}
                    </Grid>
                </SideContainerSkill>
            </HeaderSideSingleCol> */}
            <HeaderSideSingleCol style={{marginRight:"12%",marginLeft:"10vw",width:"70vw"}}>
                <Heading>Technical Skills</Heading>
                <SideContainerSkill style={{width:"70vw",height:"50vh",marginTop:"5%"}}>
                    <Grid container spacing={2} alignContent={"center"} justify={"space-around"} >
                        {getTechArray()}
                    </Grid>
                </SideContainerSkill>
            </HeaderSideSingleCol>
            {/* <HeaderSideSingleCol style={{width:"10%",minWidth:"200px"}}> 
                <Heading style={{marginTop:"100px"}} >Other Skills</Heading>
            </HeaderSideSingleCol> */}
            {/* {getOtherSkill()} */}
        </HeaderContainer>
    </AboveDiv>
}

export default Skill
