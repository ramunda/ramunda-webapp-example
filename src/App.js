import React from 'react'
import AppRouter from './AppRouter'
import AppMenu from './AppMenu'
import Footer from './Footer'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <Router>
        <AppMenu />
        <AppRouter />
        <Footer />
      </Router>
    )
  }
}

export default App;
