import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .base-card {
    margin: 10px 0;
    max-width: 400px;
  }

  > div {
    max-width: 100%;
    width: 832px;
  }
`
export const Title = styled.p`
  color: ${({ theme }) => theme.colorPrimary};
  font: normal normal 700 1.7rem 'Montserrat';
`

export const Link = styled(BaseLink)`
  color: #ac897e;
  font: normal normal 600 1.5rem 'Montserrat';
  margin-top: 40px;

  &:hover {
    text-decoration: none;
  }
`
