import styled from 'styled-components'

type FooterProps = {
  center: boolean
}

export const Footer = styled.div<FooterProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? 'center' : 'space-between')};
  align-items: center;
  height: 80px;

  button {
    width: 60%;
  }
`
