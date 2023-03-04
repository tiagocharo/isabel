import { createContext, useContext, useEffect, useState } from 'react'

import { useNotification } from '../../contexts'
import { addDoc, getData, getDbRef } from '../../firebase'
import {
  Message,
  MessageData,
  MessageProviderProps,
  MessageSent,
} from './types'

export const MessageContext = createContext({} as MessageData)

export function MessageProvider({ children }: MessageProviderProps) {
  const { openNotification } = useNotification()

  const [messages, setMessages] = useState<Message[]>([])

  async function getMessages() {
    const messages: Message[] = []

    const response = await getData('messages')

    response.forEach((doc) => {
      const data = doc.data() as MessageSent
      messages.push({ ...data, id: doc.id })
    })

    setMessages(messages)
  }

  async function addMessage(data: MessageSent) {
    const dbRef = getDbRef('messages')
    const today = new Date().toLocaleDateString('pt-BR')

    try {
      await addDoc(dbRef, { ...data, date: today })

      openNotification('Mensagem adicionada', 'Mensagem adicionada com sucesso')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <MessageContext.Provider value={{ messages, getMessages, addMessage }}>
      {children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => useContext(MessageContext)
