import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import * as Icons from 'react-icons/ai'

import { Cart } from '../../../components/atoms'
import { logo } from '../../../assets'
import { useWindowSize } from '../../../hooks'

import { Container, ContainerMenuMobile, Content, Logo, Menu } from './style'

export function Header() {
  const { pathname } = useLocation()
  const { width } = useWindowSize()
  const isHeaderMobile = width && width < 999

  const [current, setCurrent] = useState('/')

  const items: MenuProps['items'] = [
    {
      label: <Link to='/'>Apresentação</Link>,
      icon: <Icons.AiOutlineUser size='2rem' />,
      key: '/',
    },
    {
      label: (
        <Link to='/gift-list'>
          {isHeaderMobile ? 'Presentes' : 'Lista de presentes'}
        </Link>
      ),
      icon: <Icons.AiOutlineBook size='2rem' />,
      key: '/gift-list',
    },
    {
      label: <Link to='/messages'>Mensagens</Link>,
      icon: <Icons.AiOutlineMessage size='2rem' />,
      key: '/messages',
    },
    {
      label: (
        <Link to='/confirmation'>
          {isHeaderMobile ? 'Presença' : 'Confirmação de Presença'}
        </Link>
      ),
      icon: <Icons.AiOutlineCalendar size='2rem' />,
      key: '/confirmation',
    },
  ]

  const onClick: MenuProps['onClick'] = (e) => setCurrent(e.key)

  useEffect(() => {
    setCurrent(pathname)
  }, [pathname])

  return (
    <>
      <Container>
        <Content>
          <Link to='/'>
            <Logo src={logo} alt='logo' />
          </Link>

          {!isHeaderMobile && (
            <>
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode='horizontal'
                items={items}
              />

              <Cart />
            </>
          )}
        </Content>
      </Container>

      {isHeaderMobile && (
        <ContainerMenuMobile>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode='horizontal'
            items={items}
          />

          <Cart />
        </ContainerMenuMobile>
      )}
    </>
  )
}
