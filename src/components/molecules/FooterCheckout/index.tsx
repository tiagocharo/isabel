import { Button } from '../../../components'
import { Footer } from './style'

interface FooterCheckoutProps {
  step: number
  isCartEmpty: boolean
  handleCancel: () => void
  handleSubmitCart: () => void
}

export function FooterCheckout({
  step,
  isCartEmpty,
  handleCancel,
  handleSubmitCart,
}: FooterCheckoutProps) {
  return (
    <Footer center={isCartEmpty || step === 2}>
      {step === 1 && (
        <Button key='back' type='link' onClick={handleCancel}>
          {isCartEmpty ? 'Continuar comprando' : 'Escolher mais produtos'}
        </Button>
      )}

      {!isCartEmpty && (
        <Button key='submit' type='primary' onClick={handleSubmitCart}>
          {step === 1 ? 'Finalizar compra' : 'Fechar'}
        </Button>
      )}
    </Footer>
  )
}
