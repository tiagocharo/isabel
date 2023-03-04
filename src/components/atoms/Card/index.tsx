import { ReactNode } from 'react'

import { Container } from './style'

interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return <Container className='base-card'>{children}</Container>
}
