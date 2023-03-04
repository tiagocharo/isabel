import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 100px auto 40px;
  max-width: 950px;

  .base-card {
    padding: 16px;
  }
`

export const DateContainer = styled.div`
  max-width: 800px;
  padding-bottom: 60px;
  width: 100%;
`

export const Title = styled.h2`
  color: #ac897e;
  font: normal normal 700 1.8rem 'Montserrat';
  text-align: center;
`

export const TimeDisplay = styled.div`
  color: #584540;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  padding: 20px 0;

  p {
    font: normal normal 400 1.8rem 'Montserrat';
  }
`

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: normal normal 700 2.4rem 'Montserrat';
  width: 100%;
`

export const TimeContent = styled.div`
  border: 2px solid ${({ theme }) => theme.colorPrimary};
  border-width: 2px 0;
  padding: 5px 0;
  text-align: center;
  text-transform: uppercase;
  width: 350px;
`

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  p {
    color: ${({ theme }) => theme.colorSecondary};
    font: normal normal 400 1.8rem 'Montserrat';
  }

  @media (max-width: 999px) {
    flex-direction: column;
  }
`

export const AddresContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 15px 0;

  iframe {
    border: none;
    height: 300px;
    width: 100%;
  }
`

export const Address = styled.address`
  color: ${({ theme }) => theme.colorSecondary};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;

  svg {
    margin-right: 5px;
  }
`
