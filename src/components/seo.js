import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import favicon from "../images/rklogo.svg"
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, title, siteUrl,imageUrl}) => {

    return <Helmet
    title={title}
    titleTemplate={`${title}`}
    defaultTitle={title}
    meta={[
        {
            name: 'description',
            content: description,
        },
        {
            property: `og:title`,
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: `og:type`,
            content: `website`,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:card',
            content: 'summary',
        },
    ]}
    link={[
        {
            rel: 'shortcut icon',
            type: 'image/svg',
            href: `${favicon}`,
         },
    ]}
    />

}
export default SEO
