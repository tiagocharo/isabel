import { ConfirmationForm, LayoutPage } from '../../components'
import { Container } from './style'

const pageTitle = 'Confirmação de Presença'

export function Confirmation() {
  return (
    <LayoutPage page={pageTitle}>
      <Container>
        <ConfirmationForm />
      </Container>
    </LayoutPage>
  )
}
