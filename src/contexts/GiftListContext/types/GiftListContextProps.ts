import { Dispatch, SetStateAction } from 'react'
import { GiftList } from '.'

export interface GiftListContextProps {
  giftList: GiftList[]
  setGiftList: Dispatch<SetStateAction<GiftList[]>>
}
