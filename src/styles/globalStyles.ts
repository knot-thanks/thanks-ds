import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BLACK } from "./colors";

export default createGlobalStyle`
  ${reset};
  @import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);

  html, body, #app, #root {
    //height: 100%;
  }
  body {
    color: ${BLACK};
    font-family: 'Jeju Gothic', sans-serif;
    .f-normal {
      font-family: 'Jeju Gothic', sans-serif;
    }
    .f-bold {
      font-family: 'Jeju Gothic', sans-serif;
      font-weight: bold;
    }
    margin: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
  }
  &.scrollHidden {
    overflow: hidden;
  }
  
  button {
    padding: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  input {
    caret-color: ${BLACK};
  }

  hr {
    margin: 0;
  }
/*   
  .slide-up-enter {
    opacity: 0;
    transform: translateY(100px);
  }
  .slide-up-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }
  .slide-up-exit {
    opacity: 1;
  }
  .slide-up-exit-active {
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 300ms, transform 300ms;
  }
  
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  } */
`;
