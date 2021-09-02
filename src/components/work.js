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
            <Typography>I created a reward and order management system for customer use. It maintains rewards by connecting through Wohoo API. The database used is PostgreSQL. NodeJs for the backend. The whole system was deployed by me on Digital Ocean using Docker and Kubernetes. I also created a frontend for a web application that is used by customers. For the frontend, ReactJs is used.</Typography>
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
            <Typography>I created an inventory management system for the company. It is used to manage inventory of products, supplier operations. User entities are Inventory manager, Channel manager, Admin, Data Analyst. Coordinating with all this for teams, I designed, developed, and deploy the frontend & backend of the system. The tech stacks used are MongoDB, NodeJs, ReactJS, NextJS framework, AWS S3, Heroku, Netlify. Before my system, Company has to pay monthly charges to Magento and with less useful features but with my system less money with customized features and easy to use.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </WorkDiv>
  );
}

export default WorkExperience;