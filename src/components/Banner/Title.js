import React from "react"
import styled from "styled-components"
const Title = ({ title }) => {
  return (
    <Wrapper>
      <h4> {title} </h4>
      <div className="line"></div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1.25rem;
  h3 {
    color: var(--clr-grey-3);
    text-transform: uppercase;
    font-weight: 500;
    background: var(--clr-white);
    display: inline-block;
    margin-bottom: 0;
    padding: 0 0.6rem;
  }
  // .line {
  //   position: absolute;
  //   top: 50%;
  //   left: 0;
  //   width: 100%;
  //   height: 1.5px;
  //   transform: translateY(-50%);
  //   background: var(--clr-primary-5);
  //   z-index: -1;
  // }
  h4 {
    font-family: "Times New Roman", Times, serif;
    text-transform: uppercase;
    font-weight: 500;
    position: relative;
    font-size: 22px;
    z-index: 1;
    overflow: hidden;
    text-align: center;
    padding: 0 0.6rem;
  }
  h4:before,
  h4:after {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 50%;
    height: 1.5px;
    content: "\a0";
    background-color: var(--clr-primary-5);
  }
  h4:before {
    margin-left: -50%;
    text-align: right;
  }
  .color {
    background-color: #ccc;
  }
`
export default Title
