import { Input as BaseInput } from 'antd'
import styled from 'styled-components'

export const StyledTextArea = styled(BaseInput.TextArea)`
  border: none;
  border-radius: 0;

  &.ant-input-textarea-show-count::after {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  textarea {
    border: 1px solid #e88d5d;
    border-radius: 16px;
    padding: 15px;
    resize: none;
    position: relative;

    &::placeholder {
      color: #828282;
      font: normal normal 400 1.4rem 'Open Sans';
    }
  }
`
