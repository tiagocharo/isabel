import { createContext, useContext } from 'react'
import { message, notification } from 'antd'
import { NoticeType } from 'antd/es/message/interface'
import { NotificationData, NotificationProviderProps } from './types'

const NotificationContext = createContext({} as NotificationData)

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [api, contextNotification] = notification.useNotification()
  const [messageApi, contextMessage] = message.useMessage()

  const openNotification = (message: string, description: string) => {
    api.success({
      message,
      description,
      placement: 'topRight',
    })
  }

  const openMessage = (type: NoticeType, content: string) => {
    messageApi.open({ type, content })
  }

  return (
    <NotificationContext.Provider
      value={{
        contextNotification,
        openNotification,
        contextMessage,
        openMessage,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)
