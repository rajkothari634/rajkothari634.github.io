import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import favicon from "../images/rklogo.svg"

function SEO({ description, path, title, image, keywords }) {

    return (
        <Helmet>
            <title>{"Raj Kothari Portfolio"}</title>
            <link rel="canonical" href={"https://bit.ly/rajkothari634" + (path ? path : "")}/>
            <meta name="description" content={description}/>
            {image && <meta name="image" content={image}/>}
            <link rel="icon" href={favicon}/>
            <meta name="keywords" content={keywords}/>
            <meta property="og:url" content={"https://bit.ly/rajkothari634" + (path ? path : "")}/>
            <meta property="og:type" content="portfolio"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            {image && <meta property="og:image" content={image}/>}
            {image && <meta property="og:image:type" content="image/jpeg"/>}
            {image && <meta property="og:image:width" content="300"/>}
            {image && <meta property="og:image:height" content="300"/>}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:creator" content={"@rajkohtari634"}/>
            <meta name="twitter:title" content={title}/>
            <meta name="propeller" content="c68f0a9b2f39cf1022641f732ca0e200"/>
            <meta name="twitter:description" content={description}/>
            {image && <meta name="twitter:image" content={image}/>}
            <meta name="msapplication-TileImage" content={image}/>
            <link rel={"image_src"} href={image}/>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            <script data-ad-client="ca-pub-7333133485220683" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            {/*<script type='text/javascript' src='https://pl15590457.profitablegate.com/13/b7/fc/13b7fc6c7ad62951589198d0655fd94b.js'></script>*/}
            {/*<script async src='https://www.responserver.com/5d07586f9fef2e40fcc132114e0a5793/invoke.js'></script>*/}
            {/*<script async src='https://raw.githubusercontent.com/krharsh17/uplift-test/master/propeller-push.js'></script>*/}
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
}

export default SEO
