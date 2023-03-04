import { useNotification } from '../../contexts'
import {
  CarouselGifts,
  Information,
  MessageSection,
  Time,
  Welcome,
} from '../../components'

import { Container } from './style'

export function Home() {
  const { contextNotification } = useNotification()

  return (
    <Container>
      {contextNotification}

      <Welcome />
      <Time />
      <CarouselGifts />
      <MessageSection />
      <Information />
    </Container>
  )
}
