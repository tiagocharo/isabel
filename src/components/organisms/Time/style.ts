import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px auto;
  max-width: 920px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 220px;
  }
`
