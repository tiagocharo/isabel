import { ReactElement } from 'react'
import { NoticeType } from 'antd/es/message/interface'

type Alert = ReactElement<any, string | React.JSXElementConstructor<any>>

export interface NotificationData {
  contextNotification: Alert
  openNotification: (message: string, description: string) => void
  contextMessage: Alert
  openMessage: (type: NoticeType, content: string) => void
}
