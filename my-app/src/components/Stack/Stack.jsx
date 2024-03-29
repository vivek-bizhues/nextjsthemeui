import React, { useContext } from 'react'
import { Container, Flex } from 'theme-ui'
import pageContextProvider from '../../common-helpers/src/pageContextProvider'
import Section from '../../flow-ui-components/Section/index.js'
import Reveal from '../../flow-ui-components/Reveal'

export const Stack = ({ children, direction, effectProps = {}, ...props }) => {
  const context = useContext(pageContextProvider)

  const content = (
    <Container>
      <Section {...props}>
        <Flex sx={{ flexDirection: direction }}>{children}</Flex>
      </Section>
    </Container>
  )

  //Use Reveal animation only on route update
  return context.location &&
    context.location.action === 'PUSH' &&
    effectProps.effect !== false ? (
    <Reveal {...effectProps}>{content}</Reveal>
  ) : (
    content
  )
}
