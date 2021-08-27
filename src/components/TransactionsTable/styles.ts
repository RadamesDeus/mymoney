import styled from 'styled-components';

export const Container = styled.div`
    
  max-width: 1120px;
  margin: 4rem auto;
  display: flex;
  width: 100%;
  
  table{
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th{ 
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    font-style: normal;
    text-align:left;
    padding: 0 1rem;
    color: #969CB2
  }

 tbody tr{
    background: #fff;
  }

  td{
    padding: 1rem;
    color: #363F5F;
    border-radius: 0.25rem;

    & + td{
      color: #969CB2;
    }

    &.income{
      color: var(--green);
    }
    &.outcome{
      color: var(--red);
    }
  }

  

`

