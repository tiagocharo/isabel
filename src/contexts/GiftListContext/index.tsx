import { createContext, useContext, useEffect, useState } from 'react'
import { getData } from '../../firebase'
import { GiftList, GiftListContextProps, GiftListProviderProps } from './types'

export const GiftListContext = createContext({} as GiftListContextProps)

export function GiftListProvider({ children }: GiftListProviderProps) {
  const [giftList, setGiftList] = useState<GiftList[]>([])

  async function getGiftList() {
    const newGifts: GiftList[] = []
    const response = await getData('gifts')

    response.forEach((doc) => {
      const data = doc.data() as GiftList
      newGifts.push({ ...data, id: doc.id })
    })

    setGiftList(newGifts)
  }

  useEffect(() => {
    getGiftList()
  }, [])

  return (
    <GiftListContext.Provider value={{ giftList, setGiftList }}>
      {children}
    </GiftListContext.Provider>
  )
}

export const useGiftList = () => useContext(GiftListContext)
