import React from 'react'
import Navbar from './Navbar/Navbar'
import IndividualIntervalsExample from './Carousel/Carousel'
import Card from './Components/Card/Card';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Pagetwo from './Components/Pages/Pagetwo';
import Cartpage from './Components/Pages/Cartpage';


const App = () => {
  return (
    <div>
      <Navbar/>
      <IndividualIntervalsExample />
      <Card />
     <Routes>
      <Route path='./' element={<Navbar />} />
      <Route path='/IndividualIntervalsExample' element={<IndividualIntervalsExample />} />
      <Route path='/Card' element={<Card />} />
      <Route path='/Card' element={<Footer />} />
      <Route path='/Pagetwo' element={<Pagetwo />}/>
      <Route path='/Cartpage' element={<Cartpage />}/>
     </Routes>
     <Footer />
    </div>
  )
}

export default App
