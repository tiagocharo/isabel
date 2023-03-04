import { useGiftList, useNotification } from '../../contexts'
import { LayoutPage, ShoppingCard } from '../../components'

import { Container, Grid } from './style'

const pageTitle = 'Lista de Presentes'

export function GiftList() {
  const { contextNotification } = useNotification()
  const { giftList } = useGiftList()

  return (
    <LayoutPage page={pageTitle}>
      <Container>
        {contextNotification}

        <Grid>
          {giftList.map((gift) => (
            <ShoppingCard item={gift} key={gift.image} />
          ))}
        </Grid>
      </Container>
    </LayoutPage>
  )
}
