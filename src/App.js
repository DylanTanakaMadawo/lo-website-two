import React from 'react'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css'
import Navbar from './comps/Navbar/Navbar'
import Home from './comps/Home/Home'
// import About from './comps/Pages/About/About'
import Footer from './comps/Footer/Footer'
import Contact from './comps/Pages/Contact/Contact'
import Catalogue from './comps/Pages/Catalogue/Catalogue'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/catalogue'>
          <Catalogue />
        </Route>

        {/* <Route path='/about'>
          <About />
        </Route> */}

        <Route path='/contact'>
          <Contact />
        </Route>

      </Switch>
      <Footer />
    </Router>
  )
}

export default App