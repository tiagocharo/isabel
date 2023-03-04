import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ConfigProvider } from 'antd'

import theme from './styles/theme'
import GlobalStyle from './styles/global'

import { Confirmation, GiftList, Home, Messages } from './pages'
import { Header, ModalCheckout } from './components'
import {
  CartProvider,
  GiftListProvider,
  MessageProvider,
  NotificationProvider,
} from './contexts'

import '@fontsource/open-sans'
import '@fontsource/montserrat'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={{ token: theme }}>
        <NotificationProvider>
          <GiftListProvider>
            <CartProvider>
              <MessageProvider>
                <BrowserRouter>
                  <Header />
                  <ModalCheckout />

                  <Routes>
                    <Route path='/' element={<Home />} index />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/gift-list' element={<GiftList />} />
                    <Route path='/confirmation' element={<Confirmation />} />
                  </Routes>
                </BrowserRouter>

                <GlobalStyle />
              </MessageProvider>
            </CartProvider>
          </GiftListProvider>
        </NotificationProvider>
      </ConfigProvider>
    </ThemeProvider>
  )
}
