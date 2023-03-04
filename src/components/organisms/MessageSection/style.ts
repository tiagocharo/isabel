import { Link as BaseLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 80px auto;
  max-width: 950px;
`

export const InsertMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    max-width: 100%;
  }

  .base-card {
    height: 415px;
    max-width: 100%;
    padding: 25px 30px 15px;
    width: 450px;
  }

  @media (max-width: 999px) {
    flex-direction: column;
  }
`

export const FormMessage = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const Title = styled.p`
  color: #584540;
  font: normal normal 400 1.6rem 'Open Sans';
  position: relative;
  text-align: center;

  &::after {
    content: '';
    border-bottom: 4px solid #e88d5d;
    height: 4px;
    position: absolute;
    top: 30px;
    right: 50%;
    transform: translateX(50%);
    width: 70%;
  }

  @media (max-width: 355px) {
    &::after {
      top: 40px;
    }
  }
`

export const CardsContainer = styled.div`
  margin: 50px auto;

  .base-card {
    margin: 10px 0;
    max-width: 100%;
    width: 425px;
  }

  > div {
    max-width: 100%;
    width: 900px;
  }
`

export const Link = styled(BaseLink)`
  color: #ac897e;
  display: flex;
  justify-content: center;
  font: normal normal 600 1.5rem 'Montserrat';
  margin-top: 40px;

  &:hover {
    text-decoration: none;
  }
`
