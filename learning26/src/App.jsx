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
import { MapDemo6 } from './components/MapDemo6.jsx';
import { MapDemo7 } from './components/MapDemo7.jsx';
import { MapDemo8 } from './components/MapDemo8.jsx';
import { MapDemo9 } from './components/MapDemo9.jsx';
import { MapDemo10 } from './components/MapDemo10.jsx';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import { Home } from './components/Home.jsx';
import { Error } from './components/Error.jsx';
import { NetflixHome } from './components/NetflixHome.jsx';
import { NetflixShows } from './components/NetflixShows.jsx';
import { NetflixMovies } from './components/NetflixMovies.jsx';
import { Watch } from './components/Watch.jsx';
import { IPLTeams } from './components/IPLTeams.jsx';
import { TeamDetails } from './components/TeamDetails.jsx';
import { RouteComponent1 } from './components/RouteComponent1.jsx';

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
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={<NetflixHome/>}/>
        <Route path='/netflixshows' element={<NetflixShows/>}/>
        <Route path='/netflixmovies' element={<NetflixMovies/>}/>
        <Route path='/iplteams' element={<IPLTeams/>}/>
        <Route path='/watch/:name' element={<Watch/>}/>
        <Route path='/teamdetails/:name' element={<TeamDetails/>}/>
        <Route path='/*' element={<Error/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/Portfolio' element={<ContentComponent/>}/>
        <Route path='/MapDemo1' element={<MapDemo1/>}/>
        <Route path='/MapDemo2' element={<MapDemo2/>}/>
        <Route path='/MapDemo3' element={<MapDemo3/>}/>
        <Route path='/MapDemo4' element={<MapDemo4/>}/>
        <Route path='/MapDemo5' element={<MapDemo5/>}/>
        <Route path='/MapDemo6' element={<MapDemo6/>}/>
        <Route path='/MapDemo7' element={<MapDemo7/>}/>
        <Route path='/MapDemo8' element={<MapDemo8/>}/>
        <Route path='/MapDemo9' element={<MapDemo9/>}/>
        <Route path='/MapDemo10' element={<MapDemo10/>}/>
        <Route path='/scoreboard' element={<RouteComponent1/>}/>
      </Routes>
    </div>
  )
}

export default App
