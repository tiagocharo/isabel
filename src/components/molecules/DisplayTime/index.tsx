import { Divider } from '../../../components'
import { Container, Time, Title } from './style'

interface DisplayTimeProps {
  title: string
  time: string
}

export function DisplayTime({ title, time }: DisplayTimeProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <Divider />

      <Time>{time}</Time>
    </Container>
  )
}
