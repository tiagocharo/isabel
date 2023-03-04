import { Card } from '../../../components'
import { MessageCardProps } from './types'

import { Author, Container, Text, TextDate } from './style'

export function MessageCard({ message }: MessageCardProps) {
  return (
    <Container>
      <Card>
        <Text>{message.text}</Text>
        <Author>{message.name}</Author>
        <TextDate>{message.date}</TextDate>
      </Card>
    </Container>
  )
}
