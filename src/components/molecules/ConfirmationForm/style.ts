import styled from 'styled-components'

export const ConfirmationContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 320px;
  max-width: 100%;
  width: 415px;
`

export const ButtonsConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  margin-top: 20px;

  button {
    border-radius: 16px;
    justify-content: flex-start;
    text-transform: lowercase;

    span {
      flex: 1;
    }
  }
`
