import React from 'react'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css'
// import Navbar from './comps/Navbar/Navbar'
// import Navbar2 from './comps/Navbar/Navbar2'
import Home from './comps/Home/Home'
// import About from './comps/Pages/About/About'
import Footer from './comps/Footer/Footer'
import Contact from './comps/Pages/Contact/Contact'
import Catalogue from './comps/Pages/Catalogue/Catalogue'
import NewNavbar from './comps/NewNavbar/NewNavbar'
import Banners from './comps/Pages/Catalogue/AllCatalogue/Banners/Banners'
import Flyers from './comps/Pages/Catalogue/AllCatalogue/Flyers/Flyers'
import Cards from './comps/Pages/Catalogue/AllCatalogue/Cards/Cards'
import Logos from './comps/Pages/Catalogue/AllCatalogue/Logos/Logos'

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      {/* <Navbar2 /> */}
      <NewNavbar />
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

        {/* PAGEES ROUTES */}

        <Route path='/banners'>
          <Banners />
        </Route>

        <Route path='/flyers'>
          <Flyers />
        </Route>

        <Route path='/cards'>
          <Cards />
        </Route>

        <Route path='/logos'>
          <Logos />
        </Route>

      </Switch>
      <Footer />
    </Router>
  )
}

export default App
