import { Dispatch, SetStateAction } from 'react'
import { CartItem } from '.'
import { GiftList } from '../../../contexts/GiftListContext/types'

export type CartContextData = {
  shoppingCart: CartItem[]
  setShoppingCart: Dispatch<SetStateAction<CartItem[]>>
  addItemOnCart: (item: GiftList, quantity: number) => void
  removeItemOnCart: (id: string) => void
  isCheckoutModal: boolean
  handleOpenCheckoutModal: () => void
  handleCloseCheckoutModal: () => void
}
