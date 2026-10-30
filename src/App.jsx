import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Shop from './components/Shop'
import Footer from './components/Footer'
import Form from './components/Form'
const App = () => {
  const [proccess, setProccess] = useState(false)
  const [productdata, setProductData] = useState({})
  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar />
      <Hero />
      <About />
      <Shop setProccess={setProccess} setProductData={setProductData} />
      <Footer />
      {proccess ? <Form data={productdata} setProccess={setProccess} /> : ""}
      <div className="fixed bottom-4 right-4 bg-black/70 backdrop-blur-md text-white/70 px-3 py-2 text-xs tracking-widest border border-white/10 rounded-full shadow-lg z-50">
        made by AyanImran
      </div>
    </div>
  )
}

export default App
