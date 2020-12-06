import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

import favicon16 from "../images/favicon16.png";
import favicon32 from "../images/favicon32.png";
import favicon64 from "../images/favicon64.png";
import appletouchicon from "../images/appletouchicon.png";

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate} link={[
    { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon16}` },
    { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
    { rel: "shortcut icon", type: "image/png",sizes: "64x64", href: `${favicon64}` },
    { rel: "apple-touch-icon", type: "image/png", sizes: "57x57",  href: `${appletouchicon}` },
  ]} >
      <html lang="tr" />
      <meta name="description" content={seo.description} lang="tr" />
      <meta name="image" content={seo.image} />
         <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="../images/appletouchicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../images/favicon32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="../images/favicon16.png"
        />
      

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={defaultTitle} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`
