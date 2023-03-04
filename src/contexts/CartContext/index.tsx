import { createContext, useContext, useEffect, useState } from 'react'
import { useNotification } from '../../contexts/NotificationContext'
import { GiftList } from '../../contexts/GiftListContext/types'
import { CartContextData, CartItem, CartProviderProps } from './types'

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const { openNotification } = useNotification()

  const [shoppingCart, setShoppingCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('shopping-cart')
    return storedCart ? JSON.parse(storedCart) : []
  })
  const [isCheckoutModal, setIsCheckoutModal] = useState(false)

  const handleOpenCheckoutModal = () => setIsCheckoutModal(true)
  const handleCloseCheckoutModal = () => setIsCheckoutModal(false)

  function addItemOnCart(item: GiftList, quantity: number) {
    const isProductInCart = shoppingCart.some(({ id }) => id === item.id)

    if (isProductInCart) {
      setShoppingCart((prevState) =>
        prevState.map((product) => {
          if (product.id === item.id) {
            return { ...product, quantity: product.quantity + quantity }
          }

          return product
        }),
      )

      return
    }

    setShoppingCart((prevState) => [...prevState, { ...item, quantity: 1 }])
    openNotification(
      'Item adicionado ao carrinho',
      `O item ${item.name} foi adicionado ao carrinho com sucesso`,
    )
  }

  function removeItemOnCart(id: string) {
    setShoppingCart((prevState) => prevState.filter((item) => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
  }, [shoppingCart])

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        addItemOnCart,
        removeItemOnCart,
        isCheckoutModal,
        handleOpenCheckoutModal,
        handleCloseCheckoutModal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
