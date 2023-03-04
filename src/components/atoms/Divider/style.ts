import { Divider as BaseDivider } from 'antd'
import styled from 'styled-components'

export const DividerStyled = styled(BaseDivider)`
  background: ${({ theme }) => theme.colorPrimary};
  height: 4px;
  margin: 15px 0;
`
