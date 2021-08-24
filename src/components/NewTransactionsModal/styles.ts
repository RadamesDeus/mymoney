import styled from 'styled-components';

export const Container = styled.form`
  
  padding: 3rem;
  

  h1{
      font-size: 1.5em;
      margin-bottom:1.5rem;
      color:#363F5F;
    }

    img.modal-close{
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      transition: all 0.5s;
      cursor: pointer;
      &:hover{
        filter:brightness(0.8)
      }
      &:active{
       transform: translateY(0.094rem);
     }
    }

    input{ 
      display: block;
      width: 100%;
      padding: 1.2rem 1.5rem;
      border-radius: 0.3rem;
      
      border: 1px solid #d7d7d7;
      background-color: #E7E9EE;
      
      &:focus{
        outline-width: 1px;
        outline-color: #c1c1c1;
       }

   

      
      &+input{
        margin-top:1rem
      }

    }

   
    ::placeholder{
      color: #969CB2
    }


    .modal-checkbox{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      width: 100%;
    }


    .modal-checkbox input[type="checkbox"] {
      width: 100px;
      
    }
    button[type="submit"] {
      display: block;
      width: 100%;
      margin-top:1rem;
      padding: 1.2rem 1.5rem;
      background-color: #33CC95;
      border: 0;
      border-radius: 0.3rem;
      color: #fff;
      font-weight: 600;
      transition: all 0.5s;
      
      &:hover{
        filter:brightness(0.9)
      }
      &:active{
       transform: translateY(0.094rem);
     }
    }


`

