import React from "react"
import styled from "styled-components"
import General from "../components/general";
import AboutMe from "../components/aboutme";
import Blogs from "../components/blogs"
import Award from "../components/award"
import Skill from "../components/skill"
import Community from "../components/community";
import Footer from "../components/footer";
import SEO from "../components/seo";
import dataImage from "../images/mlstartArticleBg.png";

const IndexDiv = styled.div`
overflow: hidden;
width: 98vw;
background-color: #f7f7f7;
&::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border:1px solid black;
}
`
export default function Home() {
  const data = {
    title: "Raj Kothari",
    description: "Full Stack Developer | Machine Learning | MongoDb | Tech Writer | Mentor | Mobile Dev | Community Builder | Learner",
    image: "https://i.ibb.co/LP8cqdd/rkimage.jpg",
    keywords:["portfolio","rajkothari634","rajkothari","raj","kothari","Full Stack Developer", "Software engineer","Machine Learning"]
  }
  return <IndexDiv>
    
     <meta property="og:title" content={data.title} data-rh="true"/>
     <meta property="og:description" content={data.description} data-rh="true"/>
     <meta property="og:image" content={data.image} data-rh="true"/>
       {//     <SEO
//         title={data.title}
//         description={data.description}
//         image={dataImage}
//         keywords={data.keywords}
//       />}
    <General/>
    <AboutMe/>
    <Blogs/>
    <Skill/>
    <Community/>
    <Award/>
    <Footer/>
  </IndexDiv>
}
