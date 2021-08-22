import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  width: 100%;
  height: 13.25rem;
`
export const Content = styled.div`
 
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem 10rem;
  
  button{ 
     background: var(--blue-light);
     padding: 0.75rem 2rem;
     border: 0;
     border-radius: 0.3125rem;
     color: #FFF;
     font-size: 1rem;
     transition: all 90ms ease-in;
     height: 3rem;

     &:active{
       transform: translateY(0.094rem);
     }

     &:hover{
       filter:brightness(0.9)
     }
  }
 
`