import React from 'react'
import "../assets/css/content.css"
import fakerImg from "../assets/images/Faker_2020.jpg"
import { HeaderComponent } from './HeaderComponent'
import { FooterComponent } from './FooterComponent'

export function ContentComponent() {
  const txt = `
  6× World champion (2013, 2015, 2016, 2023-2025)
    - 2× Worlds Finals MVP (2016, 2024)
  2× MSI champion (2016, 2017)
    - MSI Finals MVP (2016)
  Esports World Cup champion (2024)
    - Esports World Cup Finals MVP (2024)
  10× LCK champion
    - 2× LCK Season MVP
    - LCK Finals MVP
    - 2× LCK Player of the Year (2023, 2024)
    - 2× LCK Mid Laner of the Year (2023, 2024)
    - 2× LCK First All-Pro Team
    - 2× LCK Second All-Pro Team
    - 2× LCK Third All-Pro Team
  KeSPA Cup champion (2025)
  IEM champion (2016)
  Rift Rivals champion (2019)
  All-Star Invitational champion (2014)
  NLB champion (2014)
`
  return (
    <>
    <HeaderComponent/>
    <div className="content">
      
      <img src={fakerImg} alt="Faker" className="faker-image" /> {/*Faker Image*/}

      <h2><b className="title">Personal Information</b></h2>

      <p><b>Name</b> : Lee Sang-hyeok (	이상혁)</p>
      <p><b>Nickname</b> : Unkillable Demon King</p>
      <p><b>Born</b> : May 7, 1996</p>
      <p><b>Age</b> : 29 Year</p>
      <p><b>Place</b> : Seoul, South Korea</p>
      <br/>

      <h2 className="title"><b>Career Information</b></h2>

      <p><b>Occupation</b> : Gamer</p>
      <p><b>Playing Career</b> : 2013 - present</p>
      <p><b>Team</b> : T1 Esports (2013-present)</p>
      <p><b>Game</b> : 	League of Legends (LOL)</p>
      <br/>

      <h2 className="title"><b>Story</b></h2>

      <p>Lee‑Sang‑hyeok, better known as Faker, is a South Korean professional League of Legends player born in 1996. He joined SK Telecom T1 (now T1) in 2013 and quickly rose to fame for his exceptional skill, game sense, and versatility. Known as “The Unkillable Demon King,” Faker has won six World Championships (2013, 2015, 2016, 2023, 2024, 2025) and numerous domestic titles, making him the most decorated player in LoL history. Beyond his achievements, he is admired for his humility, consistency, and enduring influence on the global esports scene.</p>

      <h2 className="title"><b>Career highlights and awards</b></h2>
      <pre>
        {txt}
      </pre>
      
    </div>

    <FooterComponent/>
    </>
  )

}
