import styled from 'styled-components'
import { Menu as BaseMenu } from 'antd'

export const Container = styled.div`
  background: ${({ theme }) => theme.colorTerciary};
  height: ${({ theme }) => theme.headerHeight};
  padding: 0 15px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
`

export const ContainerMenuMobile = styled(Container)`
  padding: 0 5px;
  top: auto;
  bottom: 0;
`

export const Content = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  max-width: 1265px;

  > a {
    height: 70px;
  }

  @media (max-width: 999px) {
    justify-content: center;
  }
`

export const Logo = styled.img`
  height: 70px;
`

export const Menu = styled(BaseMenu)`
  background: transparent;
  border: none;
  flex: 1;
  padding-left: 50px;

  li {
    color: #584540;
    font: normal normal 400 1.6rem 'Open Sans';
    padding-bottom: 25px;

    &.ant-menu-item-selected {
      span {
        color: #584540;
        font-weight: 700;
      }
    }

    &.ant-menu-item-selected::after,
    &.ant-menu-item-active::after {
      border-bottom-color: ${({ theme }) => theme.colorPrimary} !important;
      border-bottom-width: 5px !important;
    }

    @media (min-width: 999px) {
      svg {
        display: none !important;
      }
    }
  }

  @media (max-width: 999px) {
    height: 100%;
    padding-left: 0;

    li {
      &.ant-menu-item {
        display: flex;
        flex-basis: 25%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        padding: 0;

        svg {
          margin-bottom: 5px;
        }

        span {
          line-height: 13px;
          margin: 0 !important;
          text-align: center;

          a {
            font-size: 1.2rem;
          }
        }

        &:nth-child(2) {
          padding-right: 15px;
        }

        &:nth-child(3) {
          padding-left: 15px;
        }
      }

      &.ant-menu-submenu {
        display: none;
      }

      &.ant-menu-item-selected {
        span {
          color: ${({ theme }) => theme.colorPrimary};
          font-weight: 700;
        }
      }

      &.ant-menu-item-selected::after,
      &.ant-menu-item-active::after {
        border: none !important;
      }
    }
  }
`
