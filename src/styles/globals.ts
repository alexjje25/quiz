import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: quizttf;
    src: url(./fonte/Akzidenz-Grotesk-Roman-Bold.ttf);
  }

  * {
    font-family: quizttf;
  }
  h1 {
    font-family: quizttf!important;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    background-color: #f9f9f9;
  }

  main {
    padding: 2.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
