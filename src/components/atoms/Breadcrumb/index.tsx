import { Link } from 'react-router-dom'
import { BreadcrumbProps } from './types'
import { BaseBreadcrumb, PrimaryItem, SecondaryItem } from './style'

export function Breadcrumb({ secondaryItem }: BreadcrumbProps) {
  return (
    <BaseBreadcrumb separator='>'>
      <PrimaryItem>
        <Link to='/'>Apresentação</Link>
      </PrimaryItem>

      <SecondaryItem>{secondaryItem}</SecondaryItem>
    </BaseBreadcrumb>
  )
}
