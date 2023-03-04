import { InputProps } from './types'
import { StyledInput } from './style'

export function Input({ placeholder, name, value, exec, ...rest }: InputProps) {
  return (
    <StyledInput
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(ev) =>
        exec((oldValue: Object) => ({
          ...oldValue,
          [ev.target.name]: ev.target.value,
        }))
      }
      {...rest}
    />
  )
}
