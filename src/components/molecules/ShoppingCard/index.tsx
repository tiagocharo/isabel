import { Button, Card } from '../../../components'
import { useCart } from '../../../contexts'
import { formatPrice } from '../../../utils'
import { smile } from '../../../assets'

import { ShoppingCardProps } from './types'
import { Content, GiftInformation, Price, Title } from './style'

export function ShoppingCard({ item }: ShoppingCardProps) {
  const { addItemOnCart, shoppingCart } = useCart()

  const isProductInCart = shoppingCart.some(({ id }) => id === item.id)

  return (
    <Card>
      <Content>
        <img src={item.image} alt={item.name} />

        <GiftInformation>
          <Title>{item.name}</Title>

          <Price>{formatPrice(item.price)}</Price>

          {isProductInCart && (
            <Button
              isPurchased={isProductInCart}
              icon={<img src={smile} alt='Icon smile' />}
            >
              Presenteando
            </Button>
          )}

          {!isProductInCart && (
            <Button onClick={() => addItemOnCart(item, 1)}>Presentear</Button>
          )}
        </GiftInformation>
      </Content>
    </Card>
  )
}
