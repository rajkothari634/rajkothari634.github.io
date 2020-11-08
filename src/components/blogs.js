import React, { useRef } from "react"
import styled from "styled-components"
import { lightTheme, darkTheme, device,Row, Col, LinkedInLogo, InstaLogo ,GithubLogo} from "./Global";
import myData from "../../mydata.json"
import clock from "../images/ic_person.svg"
import person from "../images/ic_clock.svg"
import blogBg from "../images/ic_blogbg.svg"
import { Link } from "gatsby"
import { navigate } from "gatsby-link"

const Divv = styled.div`
    width: 98vw;
    min-height: 99vh;
`

const HeaderContainer = styled.div`
height:90vh;
white-space: nowrap;
position: relative;
overflow-x:scroll;
`
const HeaderSideSingleCol = styled.div`
    margin: 40px;
    margin-top: 0px;
    margin-right: 20px;
    float: none;
    height: 90%;
    width: 40vw;
    display: inline-block;
    zoom: 1;
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
        <TopArticleBg src={props.imgUrl}/>
    </TopArticleCardContainer>

}

const MainArticleContainer = styled.div`
    margin: 40px;
    margin-top: 0px;
    margin-right: 80px;
    float: none;
    height: 90%;
    width: 40vw;
    display: inline-block;
    zoom: 1;
`

const SideArticleContainer = styled.div`
    width: 30vw;
    height: 40%;
    margin-bottom: 5vh;
    margin-top: 5vh;
`

const getArticleColArray = () => {
    let rows = [];
    console.log("opopo")
    let articleArray = myData["articles"];
    let mainContainer = <MainArticleContainer>
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
        <SideArticleContainer>
            <TopArticleCard titleSize={"22px"} 
            title={articleArray[i].title} 
            category={articleArray[i].topic}
            date={articleArray[i].date}
            path={articleArray[i].path}
            imgUrl={articleArray[i].imgUrl}/>
        </SideArticleContainer>
        {articleArray[i+1] !== undefined ?<SideArticleContainer>
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
    return (
        <Divv>
            <img src={blogBg} style={{marginLeft:"8vw",position: "absolute",width:"90vw",height:"90vh"}}/>
            <HeaderContainer>
                {getArticleColArray()}
            </HeaderContainer>
        </Divv>
    )
}

export default TopArticlesList
export { TopArticleCard }