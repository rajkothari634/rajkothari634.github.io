import React, {useContext} from "react";
import styled,{ ThemeContext } from "styled-components"
import { lightTheme, Col, device} from "./Global";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
const WorkDiv = styled.div`
    width: 100vw;
    min-height: 50vh;
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
        margin-top: 50px;
        margin-bottom: 70px;
    }
`
const WorkExperience = () =>  {
  const classes = useStyles();
  const themeContext = useContext(ThemeContext)
    
  return (
    <WorkDiv>
      <Heading>Work Experience</Heading>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color={themeContext.primary}>
              APRIL 2020 - JUNE 2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Earnest Fintech
              </Typography>
              <Typography>1. Full Stack Development of the project.<br/>
              2. PostgreSQL is used for database.<br/>
              3. Developed complete architecture of software for order management system.<br/>
              4. Docker and Kubernetes is used to deploy on Digital Ocean.<br/>
              5. Created integration with Wohoo API.</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color={themeContext.primary}>
              AUGUST 2020 - JANUARY 2021
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Arcatron Mobility
              </Typography>
              <Typography>1. Full Stack Development of the project.<br/>
              2. MongoDb is used for database.<br/>
              3. Implemented AWS S3.<br/>
              4. Developed complete architecture of software for inventory management system.<br/>
              5. Developed frontend using Nextjs framework.</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </WorkDiv>
  );
}

export default WorkExperience;