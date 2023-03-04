import { Message, MessageSent } from '.'

export interface MessageData {
  messages: Message[]
  getMessages: () => void
  addMessage: (data: MessageSent) => void
}
