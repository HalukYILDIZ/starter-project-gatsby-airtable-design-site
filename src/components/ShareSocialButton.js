import React from "react"
import styled from "styled-components"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareCount,
} from "react-share"

const ShareSocialButton = props => {
  const shareUrl = props.shareUrl || "https://www.zihatim.com"
  const title = props.title || "Zihatim"

  return (
    <Wrapper className="div">
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
            <FacebookShareCount
              url={shareUrl}
              className="Demo__some-network__share-count"
            >
              {count => count}
            </FacebookShareCount>
          </div>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton
            url={shareUrl}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  body {
    font-family: "Arial", sans-serif;
    background-color: white;
    padding: 20px;
  }

  .Demo__some-network {
    vertical-align: top;
    display: inline-block;
    margin-right: 10px;
    text-align: center;
  }

  .Demo__some-network__share-count {
    display: inline-flex;
    justify-content: center;
    white-space: nowrap;
    overflow: visible;
    width: 0;
    margin-top: 3px;
    font-size: 12px;
  }

  .Demo__some-network__share-button {
    cursor: pointer;
  }

  .Demo__some-network__share-button:hover:not(:active) {
    opacity: 0.75;
  }

  .Demo__some-network__custom-icon {
    width: 32px;
    height: 32px;
  }
`
export default ShareSocialButton
