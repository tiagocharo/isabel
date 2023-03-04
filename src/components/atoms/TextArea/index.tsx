import { TextAreaProps } from './types'
import { StyledTextArea } from './style'

export function TextArea({
  placeholder,
  name,
  value,
  exec,
  ...rest
}: TextAreaProps) {
  return (
    <StyledTextArea
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
