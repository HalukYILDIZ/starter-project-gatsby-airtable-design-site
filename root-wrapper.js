import React from "react"
import { createGlobalStyle } from "styled-components"
import { GatsbyProvider } from "./src/context/context"
import { MDXProvider } from "@mdx-js/react"
import { Headings, Code, Blockquote } from "./src/components/Complete"

const mdxComponents = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
}

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(21, 91%, 17%);
  --clr-primary-2: hsl(81, 84%, 25%);
  --clr-primary-3: hsl(81, 81%, 29%);
  --clr-primary-4: hsl(81, 77%, 34%);
  /* primary/main color */
  // --clr-primary-5: hsl(21, 62%, 45%);
  --clr-primary-5: hsl(81, 43%, 41%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(81, 57%, 50%);
  --clr-primary-7: hsl(81, 65%, 59%);
  --clr-primary-8: hsl(81, 80%, 74%);
  --clr-primary-9: hsl(21, 94%, 87%);
  --clr-primary-10: hsl(21, 100%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: #f1f5f8;
  --clr-white: #fff;
  --clr-white-1: #ffffffcc;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
// :root {
//   /* dark shades of primary color*/

//   --clr-primary-1: hsl(245, 91%, 17%);
//   --clr-primary-2: hsl(245, 84%, 25%);
//   --clr-primary-3: hsl(245, 81%, 29%);
//   --clr-primary-4: hsl(245, 77%, 34%);
//   --clr-primary-5: hsl(245, 62%, 45%);
//   /* lighter shades of primary color */
//   --clr-primary-6: hsl(245, 57%, 50%);
//   --clr-primary-7: hsl(245, 65%, 59%);
//   --clr-primary-8: hsl(245, 80%, 74%);
//   --clr-primary-9: hsl(245, 94%, 87%);
//   --clr-primary-10: hsl(245, 87%, 94%);
//   /* darkest grey - used for headings */
//   --clr-grey-1: hsl(209, 61%, 16%);
//   --clr-grey-3: hsl(209, 34%, 30%);
//   --clr-grey-4: hsl(209, 28%, 39%);
//   /* grey used for paragraphs */
//   --clr-grey-5: hsl(210, 22%, 49%);
//   --clr-grey-8: hsl(210, 31%, 80%);
//   --clr-grey-9: hsl(212, 33%, 89%);
//   --clr-grey-10: hsl(206, 33%, 96%);
//   --clr-green-dark: hsl(125, 67%, 35%);
//   --clr-green-light: hsl(134, 41%, 88%);
//   --clr-red-dark: hsl(360, 67%, 44%);
//   --clr-red-light: hsl(360, 71%, 66%);
//   --clr-white: #fff;
//   --clr-black: #0a0c10;
//   --ff-primary: 'Roboto', sans-serif;
//   --ff-secondary: 'Open Sans', sans-serif;
//   --transition: all 0.3s linear;
//   --spacing: 0.1rem;
//   --radius: 0.25rem;
//   --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//   --max-width: 1170px;
//   --fixed-width: 700px;
// }
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
  font-weight: 400;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

.facebook-icon {
  color: #3b5998;
}
.twitter-icon {
  color: #00acee;
}
.dribble-icon {
  color: #ea4c89;
}
.instagram-icon {
  color: #fb3958
}

.btn {
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}

.btn:hover {
  background: var(--clr-primary-7);
  color: var(--clr-primary-1);
}

/* section */
.section {
  padding: 5rem 0;
  position: relative;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <GatsbyProvider>
        <MDXProvider components={mdxComponents}>{element}</MDXProvider>
      </GatsbyProvider>
    </>
  )
}
