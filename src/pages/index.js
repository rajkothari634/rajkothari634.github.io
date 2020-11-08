import React from "react"
import styled from "styled-components"
import General from "../components/general";
import AboutMe from "../components/aboutme";
import Blogs from "../components/blogs"
import Award from "../components/award"
import Skill from "../components/skill"
import Community from "../components/community"

const IndexDiv = styled.div`
&::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border:1px solid black;
}
`
export default function Home() {
  return <IndexDiv>
    <General/>
    <AboutMe/>
    <Blogs/>
    <Award/>
    <Skill/>
    <Community/>
  </IndexDiv>
}
