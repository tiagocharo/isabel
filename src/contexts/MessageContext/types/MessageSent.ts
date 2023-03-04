import { Message } from '.'

export type MessageSent = Omit<Message, 'id'>
