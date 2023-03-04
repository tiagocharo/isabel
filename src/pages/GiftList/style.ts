import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px auto;
  max-width: 870px;
`

export const Grid = styled.div`
  display: grid;
  gap: 30px 60px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`
