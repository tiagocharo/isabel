import { LayoutPage, MessageCard } from '../../components'
import { useMessage } from '../../contexts'

import { Container, EmptyMessagesText, Grid } from './style'

const pageTitle = 'Mensagens'

export function Messages() {
  const { messages } = useMessage()

  return (
    <LayoutPage page={pageTitle}>
      <Container>
        {messages.length === 0 && (
          <EmptyMessagesText>
            Seja o primeira a deixar uma mensagem para a família!
          </EmptyMessagesText>
        )}

        <Grid>
          {messages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </Grid>
      </Container>
    </LayoutPage>
  )
}
