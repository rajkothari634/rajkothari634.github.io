import React, {useContext,useRef } from "react"
import styled ,{ ThemeContext } from "styled-components"
import { useScroll } from "react-use-gesture";
import { device,Row, Col} from "./Global";
import myData from "../../mydata.json"
import clock from "../images/ic_person.svg"
import blogBg from "../images/ic_blogbg.svg"
import { Link } from "gatsby"
import { navigate } from "gatsby-link"
import SvmImage from "../images/svmArticleBg.jpeg"
import Graphine from "../images/graphine.jpg"
import LearnTurtle from "../images/learnturtleArticleBg.jpeg"
import MlStart from "../images/mlstartArticleBg.png"
import PythonArticle from "../images/pythonArticleBg.png"   
import { animated, useSpring } from "react-spring";


const Div = styled.div`
    width: 100vw;
    min-height: 99vh;
    background-color: ${props=>props.theme.background};
`
const HeaderContainer = styled.div`
height:90vh;
white-space: nowrap;
position: relative;
overflow-x:scroll;
`
const HeaderSideSingleCol = styled(Row)`
    margin: 40px;
    margin-top: 0px;
    margin-right: 0px;
    margin-left: 0px;
    float: none;
    height: 90%;
    width: 40vw;
    min-width: 320px;
    display: inline-block;
    zoom: 1;
    @media ${device.tablet} {
        margin: 40px;
        margin-top: 0px;
        margin-right: 20px; 
    }
`
const TopArticleCardContainer = styled(Col)`
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
    z-index: 0;
    border-radius: 4px;
`
const TopArticleContent = styled(Col)`
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-bottom: 16px;
    padding-left: ${props => (props.titleSize === "28px" ? "28px" : "16px")};
    border-radius: 4px;
    z-index: 20;
`
const TopArticleBg = styled.img`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    border-radius: 4px;
`
const TopArticleMask = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: rgba(0, 0, 0);
    z-index: 10;
    opacity: 0.5;
    top: 0;
    transition-duration: 0.4s;
    left: 0;
    border-radius: 4px;
`
const AuthorRow = styled(Row)`
   font-family: Barlow, sans-serif;
   font-weight: 300;
   font-size: 16px;
   flex-wrap: wrap;
   align-items: center;
   color: #fff;
`
const AuthorLink = styled(Link)`
    font-family: Barlow, sans-serif;
    font-weight: 300;
    font-size: 16px;
    flex-wrap: wrap;
    align-items: center;
    color: #fff;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`
const AuthorIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 8px;
`
const TopArticleTitle = styled.a`
    font-family: Barlow, sans-serif;
    font-weight: bold;
    text-decoration: none;
    font-size: calc(${props => props.titleSize} - 4px);
    letter-spacing: 0.04em;
    color: #fff;
    margin-bottom: 16px;
    width: calc(100% - 40px);
    padding-right: 10px;
    display:inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    &:hover {
        text-decoration: underline;
    }
    
    @media ${device.tablet} {
        font-size: ${props => props.titleSize};
    }
`
const TopArticleCategory = styled.a`
    font-family: Barlow, sans-serif;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.04em;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 2px;
    padding: 6px 12px;
    margin-bottom: 17px;
    margin-left: 1px;
    text-decoration: none;
    transition-duration: 0.2s;
    
    &:hover {
        margin-bottom: 16px;
        margin-left: 0;
        border: 1.5px solid #fff;
        font-weight: 500;
        
    }
`
const MainArticleContainer = styled(animated.div)`
    margin: 40px;
    margin-top: 0px;
    margin-right: 80px;
    float: none;
    height: 90%;
    width: 40vw;
    min-width: 250px;
    display: inline-block;
    zoom: 1;
`
const SideArticleContainer = styled(animated.div)`
    width: 30vw;
    min-width: 250px;
    height: 40%;
    margin-bottom: 5vh;
    margin-top: 5vh;
`
const Heading = styled.p`
    font-family: Open-sans, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    color:${props=>props.theme.primary};
`
const getImage = (image) => {
    switch(image){
        case "svmArticleBg":
            return SvmImage;
        case "graphine":
            return Graphine;
        case "learnturtleArticleBg":
            return LearnTurtle;
        case "mlstartArticleBg":
            return MlStart;
        case "pythonArticleBg":
            return PythonArticle;
        default :
            return SvmImage;
    }
}
const TopArticleCard = (props) => {
    const maskRef = useRef(0)
    return <TopArticleCardContainer onMouseEnter={() => maskRef.current.style.opacity = 0.2}
                                    onMouseLeave={() => maskRef.current.style.opacity = 0.5}>
        <TopArticleContent titleSize={props.titleSize}>
            <TopArticleCategory
                href={"https://learnturtle.co/category?q=" + props.category.toLowerCase().replace(/ /g, "-")}>{props.category}</TopArticleCategory>
            <TopArticleTitle titleSize={props.titleSize} href={props.path}>{props.title}</TopArticleTitle>
            <AuthorRow>
                <AuthorIcon src={clock}/>
                <div>{props.date}</div>
            </AuthorRow>
        </TopArticleContent>
        <TopArticleMask ref={maskRef} onClick={() => navigate(props.path)}/>
        <TopArticleBg src={getImage(props.imgUrl)}/>
    </TopArticleCardContainer>

}
const getArticleColArray = (flipAnimationStyle) => {
    let rows = [];
    let articleArray = myData["articles"];
    let mainContainer = <MainArticleContainer style= {flipAnimationStyle}>
    <TopArticleCard titleSize={"28px"} 
        title={articleArray[0].title} 
        category={articleArray[0].topic}
        date={articleArray[0].date}
        path={articleArray[0].path}
        imgUrl={articleArray[0].imgUrl}/>
    </MainArticleContainer>
    rows.push(mainContainer);
    for(let i = 1; i<articleArray.length; i=i+2){
        let col = <HeaderSideSingleCol>
        <SideArticleContainer style= {flipAnimationStyle}>
            <TopArticleCard titleSize={"22px"} 
            title={articleArray[i].title} 
            category={articleArray[i].topic}
            date={articleArray[i].date}
            path={articleArray[i].path}
            imgUrl={articleArray[i].imgUrl}/>
        </SideArticleContainer>
        {articleArray[i+1] !== undefined ?<SideArticleContainer style= {flipAnimationStyle}>
            <TopArticleCard titleSize={"22px"} 
                 title={articleArray[i+1].title} 
                 category={articleArray[i+1].topic}
                 date={articleArray[i+1].date}
                 path={articleArray[i+1].path}
                 imgUrl={articleArray[i+1].imgUrl}/>
        </SideArticleContainer> : null }
    </HeaderSideSingleCol>
    rows.push(col)
    }
    return rows
} 

const TopArticlesList = (props) => {
    const themeContext = useContext(ThemeContext)
    const [flipAnimationStyle,setSlipAnimation] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
    }));
    const bind = useScroll(event => {
        setSlipAnimation({
          transform: `perspective(500px) rotateY(${
            event.scrolling ? clamp(event.delta[0]) : 0
          }deg)`
        });
      });
    const clamp = (value, clampAt = 30) => {
        if (value > 0) {
          return value > clampAt ? clampAt : value;
        } else {
          return value < -clampAt ? -clampAt : value;
        }
    };
    return (
        <Div>
            <img src={blogBg} style={{marginLeft:"8vw",position: "absolute",width:"90vw",height:"90vh"}}/>
            <Heading>Blogs</Heading>
            <HeaderContainer {...bind()}>
                {getArticleColArray(flipAnimationStyle)}
            </HeaderContainer>
        </Div>
    )
}
export default TopArticlesList