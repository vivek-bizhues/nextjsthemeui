import React from 'react'
import { Heading } from 'theme-ui'
import Navigation from '../../flow-ui-components/Navigation/Navigation'
// import useSiteMetadata from '@helpers-blog/useSiteMetadata'
// import attachSocialIcons from '@helpers/attachSocialIcons'

const styles = {
  social: {
    mb: [3, 0]
  },
  navHeader: {
    display: [`none`, `block`]
  }
}

export const FooterSocial = () => {

  return (
    <>
      <Heading variant='h4' as='p' sx={styles.navHeader}>
        Social Media
      </Heading>
      
    </>
  )
}
