import { Input as BaseInput } from 'antd'
import styled from 'styled-components'

export const StyledInput = styled(BaseInput)`
  border: none;
  border-bottom: 1px solid #ffcbab;
  border-radius: 0;
  padding: 0 10px 4px;

  &::placeholder {
    color: #828282;
    font: normal normal 400 1.4rem 'Open Sans';
  }
`
