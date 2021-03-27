import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'

export default function Footer() {
    return (
        <AppBar position="absolute" color="primary" style={{ top: '95%'}}>
          <Container >
            <Toolbar>
              <Typography variant="body1" color="inherit">
                Copyright © Spaghetti Code Squad
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}