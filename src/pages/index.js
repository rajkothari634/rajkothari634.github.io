import React,{useState,useRef} from "react"
import styled, {ThemeProvider} from "styled-components";
import General from "../components/general";
import AboutMe from "../components/aboutme";
import Blogs from "../components/blogs";
import WorkExperience from "../components/work";
import "../components/index.css"
import Award from "../components/award"
import Skill from "../components/skill"
import Community from "../components/community";
import Footer from "../components/footer";
import SEO from "../components/seo";
import { Col, darkTheme,lightTheme } from "../components/Global";

const IndexDiv = styled(Col)`
  width: 100vw;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  display: flex;
  background-color: ${props=>props.theme.background};
`
const ItemDiv = styled.div`
  width: 100vw;
  height: 99vh;
  scroll-snap-align: center;
`
const Home = () =>  {
  const data = {
    title: "Raj Kothari",
    description: "Full Stack Developer | Machine Learning | MongoDb | Tech Writer | Mentor | Mobile Dev | Community Builder | Learner",
    image: "https://i.ibb.co/LP8cqdd/rkimage.jpg",
    keywords:["portfolio","rajkothari634","rajkothari","raj","kothari","Full Stack Developer", "Software engineer","Machine Learning"]
  }
  const [darkMode, setDarkMode] = useState((typeof window !== "undefined" && localStorage.getItem("dark") === "true"))
  const [theme, setTheme] = useState((typeof window !== "undefined" && localStorage.getItem("dark") === "true") ? darkTheme : lightTheme)

  const toggleDarkMode = darkModeBool => {
    if (darkModeBool === true) {
        setTheme(darkTheme)
    } else {
        setTheme(lightTheme)
    }
    localStorage.setItem("dark", JSON.stringify(darkModeBool))
    setDarkMode(darkModeBool)
  }  
  return  <ThemeProvider theme={theme}>
    <SEO
      title={data.title}
      description={data.description}
      siteUrl={"https://bit.ly/rajkothari634"}
      imageUrl={`https://i.ibb.co/LP8cqdd/rkimage.jpg`}
    />
    <IndexDiv>
      <ItemDiv>
        <General toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      </ItemDiv>
      <ItemDiv>
        <AboutMe/>
      </ItemDiv>
      <ItemDiv>
        <Blogs/>
      </ItemDiv>
      <ItemDiv>
        <WorkExperience/>
      </ItemDiv>
      <ItemDiv>
        <Skill />
      </ItemDiv>
      <ItemDiv>
        <Community/>
      </ItemDiv>
      <ItemDiv>
        <Award/>
      </ItemDiv>
      <ItemDiv style={{height: "60px"}}>
        <Footer/>
      </ItemDiv>
    </IndexDiv>
  </ThemeProvider>
}

export default Home;