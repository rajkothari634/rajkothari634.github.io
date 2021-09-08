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
import { darkTheme,lightTheme } from "../components/Global";

const IndexDiv = styled.div`
width: 100vw;
background-color: ${props=>props.theme.background};
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
  // const [indexX, setIndexX] = useState(0);
  // const [posComm,setPosComm] = useState({
  //   active: false,
  //   yPos: 0
  // });
  const toggleDarkMode = darkModeBool => {
    if (darkModeBool === true) {
        setTheme(darkTheme)
    } else {
        setTheme(lightTheme)
    }
    localStorage.setItem("dark", JSON.stringify(darkModeBool))
    setDarkMode(darkModeBool)
  }  
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
 
  return  <ThemeProvider theme={theme}>
    
    <SEO
      title={data.title}
      description={data.description}
      siteUrl={"https://bit.ly/rajkothari634"}
      imageUrl={`https://i.ibb.co/LP8cqdd/rkimage.jpg`}
    />
  {/* <IndexDiv ref={scrollRef} onWheel={onWheel}> */}
  <IndexDiv>
    {/* <Header   toggleDarkMode={toggleDarkMode} darkMode={darkMode}/> */}
      <General toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <AboutMe/>
      <Blogs/>
      <WorkExperience/>
      <Skill />
      {/* <Community yPosRecord={commYPositionRecord}/> */}
      <Community/>
      <Award/>
      <Footer/>
  </IndexDiv>
  </ThemeProvider>
}

export default Home;