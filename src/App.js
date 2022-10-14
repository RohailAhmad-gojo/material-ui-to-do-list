import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/layout'

const theme = createTheme({
  palette: {
    primary:{
      main: '#fefefe'
    },
    secondary: purple
  },
  typography:{
    fontFamily: 'Quciksand',
    fontWightlight: 400,
    fontWightRegular: 500,
    fontWightMedium: 600,
    fontWightBold: 700,



  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
         <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create"> 
            <Create />
          </Route>
        </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
