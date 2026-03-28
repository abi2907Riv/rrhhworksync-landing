import { useState } from 'react'
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Descripcion from "@/components/Descripcion"
import Funciones from "@/components/Funciones"
import Capturas from "@/components/Capturas"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Descripcion/>
      <Funciones/>
      <Capturas/>
      <Contacto/>
      <Footer/>
    </>
  );
}

export default App
