import styled from 'styled-components'

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.headerHeight};
  padding: 30px 10px 50px;
  width: 100%;

  @media (max-width: 999px) {
    margin-bottom: 30px;
  }
`
