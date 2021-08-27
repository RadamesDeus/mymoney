import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --red:#E52E4D;
    --green:#33CC95;
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

  body,input, textarea, button{
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }
  
  button{
    cursor: pointer;
  }

  [disabled]{
    opacity:  0.6;
    cursor: not-allowed;
  }


  .customStylesModal{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-Color: rgba(0, 0, 0, 0.5);


    display: flex;
    justify-content: center;
    align-items: center;
   
  }

  .customStylesModalContent{
    position: relative;
    width: 576px;
    background-color:#F0F2F5;
    border-radius: 0.5rem;
  }



`
