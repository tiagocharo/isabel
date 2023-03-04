import { formatPrice } from '../../../utils'
import { TotalPriceContainer } from './style'

export function TotalPrice({ totalPrice }: { totalPrice: number }) {
  return (
    <TotalPriceContainer>
      <span>Total</span>
      <span>{formatPrice(totalPrice)}</span>
    </TotalPriceContainer>
  )
}
