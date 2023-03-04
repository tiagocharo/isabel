import { ButtonProps } from './types'

import { BaseButton } from './style'

export function Button({
  type = 'primary',
  shape = 'default',
  icon,
  size,
  children,
  ...rest
}: ButtonProps) {
  return (
    <BaseButton type={type} shape={shape} icon={icon} size={size} {...rest}>
      {children}
    </BaseButton>
  )
}
