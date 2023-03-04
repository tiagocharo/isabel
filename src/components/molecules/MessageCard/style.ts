import styled from 'styled-components'

export const Container = styled.div`
  .base-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    min-height: 160px;
    padding: 32px 16px 12px;
    text-align: center;
    width: 425px;
  }
`

export const Text = styled.p`
  color: #ac897e;
  font: normal normal 400 1.6rem 'Open Sans';
  flex: 1;
`

export const Author = styled.p`
  color: #584540;
  font: normal normal 700 1.4rem 'Open Sans';
  margin-bottom: 3px;
`

export const TextDate = styled.p`
  color: #584540;
  font: normal normal 400 1.4rem 'Open Sans';
`
