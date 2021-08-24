import styled from 'styled-components';

export const Container = styled.div`
display:grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
width: 100%;
justify-content: space-between;
 
`

export const Card = styled.div`
  /* flex-flow: 1; */
  
  display:flex;
  flex-direction:column;
  padding: 1.6rem 2rem;
  border-radius: 0.3125rem;
  min-width: 22rem;
  height: 8.5rem;
  background:var(--shape);
  margin-top: -4rem;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:last-child{
    background-color: var(--green);
    color: #FFFFFF;
  }
  
`
export const Titulo = styled.span`
font-size: 1rem;

`
export const Icone = styled.img`
height: 1.6rem;
`

export const Total = styled.strong`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`