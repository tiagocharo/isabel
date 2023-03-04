import { ReactElement } from 'react'
import { Breadcrumb } from '../../../components'
import { Container, Title } from './style'

interface LayoutPageProps {
  page: string
  children: ReactElement
}

export function LayoutPage({ page, children }: LayoutPageProps) {
  return (
    <Container>
      <Breadcrumb secondaryItem={page} />

      <Title>{page}</Title>

      {children}
    </Container>
  )
}
