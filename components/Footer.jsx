import React from 'react'
import { Link, Typography } from "@material-ui/core"
import MuiLink from '@material-ui/core/Link';




function Footer() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://nickachee.com/">
    Made by Nick
      </MuiLink>{' '}
      {new Date().getFullYear()}.<br /> <Link href="mailto:nicholas.achee103@gmail.com">nicholas.achee103@gmail.com</Link>
    </Typography>
    )
}

export default Footer
