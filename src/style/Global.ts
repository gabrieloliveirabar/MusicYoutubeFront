import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
    --color-red: #C80B0B;
    --color-red-focus: #FD1515;
    --color-black: #1E1E1E
   
    font-size: 60%; 
 
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  #root{
    width: 100%;
    height: 100%;
  }
  body {
    
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
  h1, h2, h3 {
    font-weight: bold;
    
  }
  h4,h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
 
  a {
    text-decoration: none;
    color:white;
  }
  ul {
    list-style: none;
  }
  
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-red);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-gray-2);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray-4);
  }
`;
