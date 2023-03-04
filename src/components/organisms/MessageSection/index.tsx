import { FormEvent, useState } from 'react'
import { Carousel } from 'antd'
import { Button, Card, Input, MessageCard, TextArea } from '../../../components'

import { useMessage } from '../../../contexts'
import { MessageSent } from '../../../contexts/MessageContext/types'
import { couple } from '../../../assets'
import { carouselProps } from '../../../enums'

import * as Styles from './style'

export function MessageSection() {
  const [currentMessage, setCurrentMessage] = useState({} as MessageSent)
  const [error, setError] = useState(false)

  const { messages, addMessage, getMessages } = useMessage()

  async function handleAddMessage(ev: FormEvent, data: MessageSent) {
    ev.preventDefault()

    if (!data.name || !data.text) {
      setError(true)
      return
    }

    addMessage(data)

    getMessages()
    setCurrentMessage({ name: '', text: '', date: '' })
    setError(false)
  }

  return (
    <Styles.Container>
      <Styles.InsertMessageContainer>
        <img src={couple} alt='Imagem Casal' />

        <Card>
          <Styles.FormMessage
            onSubmit={(ev) => handleAddMessage(ev, currentMessage)}
          >
            <Styles.Title>
              Deixe uma mensagem para o bebê e a família!
            </Styles.Title>

            <Input
              status={error && !currentMessage.name ? 'error' : ''}
              placeholder='Nome'
              name='name'
              value={currentMessage.name}
              exec={setCurrentMessage}
            />

            <TextArea
              status={error && !currentMessage.text ? 'error' : ''}
              placeholder='Escreva aqui'
              name='text'
              value={currentMessage.text}
              exec={setCurrentMessage}
              showCount
              maxLength={120}
              rows={7}
            />

            <Button htmlType='submit'>Enviar</Button>
          </Styles.FormMessage>
        </Card>
      </Styles.InsertMessageContainer>

      <Styles.CardsContainer>
        <Carousel
          {...carouselProps}
          slidesToShow={messages.length === 1 ? 1 : 2}
        >
          {messages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </Carousel>
      </Styles.CardsContainer>

      {messages.length > 0 && (
        <Styles.Link to='/messages'>Ver todas as mensagens</Styles.Link>
      )}
    </Styles.Container>
  )
}
