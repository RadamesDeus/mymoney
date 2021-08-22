import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --red:#E52E4D;
    --blue:#5428CC;

    --blue-light: #6933ff;

    --text-title:#363F5F;
    --text-body:#969CB3;

    --background:#F0F2F5;
    --shape:#FFF;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (min-width: 1080px) {
      font-size: 93.75%;
    }

    @media (min-width: 720px) {
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-font-smooth: antialiased;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity:  0.6;
    cursor: not-allowed;
  }
`
