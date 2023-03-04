import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;

  > img {
    height: 110px;
    width: 120px;
  }
`
export const GiftInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 130px;

  button {
    border-radius: 60px;
  }
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colorSecondary};
  font-weight: 700;
  font-size: 1.4rem;
`

export const Price = styled.p`
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 700;
  font-size: 1.4rem;
`
