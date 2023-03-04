import { Carousel } from 'antd'
import { ShoppingCard } from '../../../components'

import { carouselProps } from '../../../enums'
import { useGiftList } from '../../../contexts'

import { Container, Link, Title } from './style'

export function CarouselGifts() {
  const { giftList } = useGiftList()

  return (
    <Container>
      <Title>Lista de presentes</Title>

      <Carousel {...carouselProps}>
        {giftList.map((gift) => (
          <ShoppingCard item={gift} key={gift.id} />
        ))}
      </Carousel>

      <Link to='/gift-list'>Ver toda a lista de presentes</Link>
    </Container>
  )
}
