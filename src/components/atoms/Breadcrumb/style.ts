import { Breadcrumb } from 'antd'
import styled from 'styled-components'

export const BaseBreadcrumb = styled(Breadcrumb)`
  padding-bottom: 30px;

  .ant-breadcrumb-separator {
    color: #584540;
  }
`

export const PrimaryItem = styled(Breadcrumb.Item)`
  a {
    color: ${({ theme }) => theme.colorSecondary};
    font: normal normal 700 1.6rem 'Open Sans';

    &:hover {
      background: none;
      color: #8c665a;
      text-decoration: underline;
    }
  }
`

export const SecondaryItem = styled(Breadcrumb.Item)`
  color: #584540;
  font: normal normal 300 1.6rem 'Open Sans';
`
