import { Modal as BaseModal, QRCode } from 'antd'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import styled, { css } from 'styled-components'

type MinusIconComponent = {
  disabled: boolean
}

export const Modal = styled(BaseModal)`
  .ant-modal-content {
    padding: 0;
  }

  .ant-modal-header {
    background: ${({ theme }) => theme.colorPrimary};
    padding: 24px;

    .ant-modal-title {
      color: #fff3e2;
      font: normal normal 700 1.8rem 'Open Sans';
      letter-spacing: 1px;
    }
  }

  .ant-modal-close-x svg {
    color: #fff3e2;
  }

  .ant-modal-body,
  .ant-modal-footer {
    padding: 20px;
  }

  svg {
    cursor: pointer;
  }
`

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  img {
    width: 100px;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 60%;
  padding: 0 5px;
`

export const Quantity = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    color: #584540;
    font-size: 1.6rem;
    padding: 0 5px;
  }

  svg {
    color: #ac897e;
  }
`

export const MinusIcon = styled(AiOutlineMinusCircle)<MinusIconComponent>`
  ${({ disabled }) =>
    disabled &&
    css`
      color: #ddd !important;
      cursor: not-allowed !important;
    `}
`

export const PixContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PixTitle = styled.p`
  color: #ac897e;
  font: normal normal 800 2rem 'Open Sans';
  text-transform: uppercase;
`

export const PixSubtitle = styled.p`
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
    width: 30px;
  }

  span {
    font: normal normal 400 2.8rem 'Open Sans';
  }
`

export const PixContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const StyledQRCode = styled(QRCode)`
  background: none;
  border: none;
`

export const Instruction = styled.p`
  font: normal normal 400 1.5rem 'Open Sans';
  margin: 15px 0;
  text-align: center;
  text-transform: uppercase;
`

export const PixCode = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  span {
    margin-right: 5px;
  }
`
