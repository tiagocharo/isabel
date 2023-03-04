import { Dispatch, SetStateAction } from 'react'
import { TextAreaProps as AntdTextAreaProps } from 'antd/es/input/TextArea'

export interface TextAreaProps extends AntdTextAreaProps {
  exec: Dispatch<SetStateAction<any>>
}
