import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from "react";

import { HeaderComponent } from './components/HeaderComponent.jsx'
import { FooterComponent } from './components/FooterComponent.jsx'
import { ContentComponent } from './components/ContentComponent.jsx'
import { Header1Component } from './components/Header1Component.jsx';
import { Footer1Component } from './components/Footer1Component.jsx';
import { MapDemo1 } from './components/MapDemo1.jsx';
import { MapDemo2 } from './components/MapDemo2.jsx';
import { MapDemo3 } from './components/MapDemo3.jsx';
import { MapDemo4 } from './components/MapDemo4.jsx';
import { MapDemo5 } from './components/MapDemo5.jsx';
function App() {
  
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };

    handleChange(media);
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <div>
      <Header1Component />
      <MapDemo5/>
      <Footer1Component />
    </div>
  )
}

export default App
