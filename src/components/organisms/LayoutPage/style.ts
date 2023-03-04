import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }) => `${theme.headerHeight} auto 0`};
  max-width: 1295px;
  padding: 30px;

  @media (max-width: 999px) {
    margin-bottom: ${({ theme }) => theme.headerHeight};
    padding: 30px 15px;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colorPrimary};
  font: normal normal 700 3.5rem 'Montserrat';
  margin-bottom: 45px;
  text-align: center;
`
