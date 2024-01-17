import React from 'react'
import { Global } from '@emotion/react'
import { ThemeUIProvider, Flex, Box, css } from 'theme-ui'
import theme from '../../styles/theme'
import pageContextProvider from '../../common-helpers/src/pageContextProvider'
import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'

export const Layout = ({ children, pageContext, location }) => (
  <ThemeUIProvider theme={theme}>
    <pageContextProvider.Provider value={{ pageContext, location }}>
      <Flex variant='layout.layout'>
        <Global styles={css(theme => theme.global)} />
        <Header />
        <Box variant='layout.body'>{children}</Box>
        <Footer />
      </Flex>
    </pageContextProvider.Provider>
  </ThemeUIProvider>
)
