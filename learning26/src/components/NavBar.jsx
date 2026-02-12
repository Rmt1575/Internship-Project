import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="nav-link" to="/" style={{ color: "red" }}>
          NETFLIX
        </Link>
        {/* <Link class="nav-link" to="/" style={{color: "red"}}>
          HOME
        </Link> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/Portfolio">
                Portfolio
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/iplteams">
                Teams
              </Link>
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link" to="/functiondemo">
                FD1
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/usestatedemo1">
                USD1
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/usestatedemo2">
                USD2
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/usestatedemo3">
                USD3
              </Link>
            </li> */}
            {/* <li>
              <Link class="nav-link" to="/employee">
                Employee
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/cards">
                CARD
              </Link>
            </li> */}
            <li>
              <Link class="nav-link" to="/valorant">
                VALORANT
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/formdemo1">
                FormDemo1
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/playerform">
                PLAYER FORM
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/employeeform">
                EMPLOYEE FORM
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/countrystate">
                COUNTRY-STATE
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/formdemo2">
                FormDemo2
              </Link>
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link" to="/MapDemo1">
                MAPDEMO1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MapDemo2">
                MAPDEMO2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MapDemo3">
                MAPDEMO3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MapDemo4">
                MAPDEMO4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MapDemo5">
                MAPDEMO5
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MapDemo6">
                Manga Store
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MapDemo7">
                MAPDEMO7
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MapDemo8">
                MAPDEMO8
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MapDemo9">
                MAPDEM9
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MapDemo10">
                MAPDEMO10
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/scoreboard">
                SCORE BOARD
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
