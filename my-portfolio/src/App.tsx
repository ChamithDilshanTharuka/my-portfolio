import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'

const App = () => (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    </>
);


export default App;
