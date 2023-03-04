import { useWindowSize } from '../../../hooks'
import { shower, showerMobile } from '../../../assets'

import { Container, Text, WelcomeText } from './style'

export function Welcome() {
  const { width } = useWindowSize()

  return (
    <Container>
      <img
        src={width && width < 768 ? showerMobile : shower}
        alt='Imagem do Chá'
      />

      <WelcomeText>
        <p>Olá, familiares e amigos!</p>
        <p>Esta é a lista de presentes do Nathan.</p>
        <p>
          Agradecemos o carinho de todos. Estamos muito felizes e animados para
          celebrar a chegada do nosso pequeno com vocês!
        </p>

        <p>Com amor, Rodrigo e Thamires.</p>
      </WelcomeText>

      <Text>A Deus toda glória!</Text>
    </Container>
  )
}
