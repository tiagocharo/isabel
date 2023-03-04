import { Dispatch, SetStateAction } from 'react'
import { InputProps as AntdInputProps } from 'antd'

export interface InputProps extends AntdInputProps {
  exec: Dispatch<SetStateAction<any>>
}
