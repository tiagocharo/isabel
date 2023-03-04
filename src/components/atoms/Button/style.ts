import styled, { css } from 'styled-components'
import { Button } from 'antd'
import { ButtonProps } from './types'

export const BaseButton = styled(Button)<ButtonProps>`
  font: normal normal 400 1.3rem 'Open Sans';
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 100%;

  &.ant-btn-link span,
  &.ant-btn-default span {
    color: ${({ theme }) => theme.colorPrimary};

    &:hover {
      color: ${({ theme }) => theme.colorPrimary};
    }
  }

  &.ant-btn-link span {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  &.ant-btn-default {
    border-radius: 16px;

    svg {
      color: #e88d5d;
    }
  }

  ${({ icon }) =>
    icon &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 32px;
        width: 32px;
      }

      svg {
        font-size: 1.6rem;
        margin-right: 5px;
      }
    `}

  ${({ isPurchased }) =>
    isPurchased &&
    css`
      background: #00b7ac;

      &:hover {
        background-color: #00d9cc !important;
      }
    `}
`
