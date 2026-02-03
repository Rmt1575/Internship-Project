import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="nav-link" to="/">
          Home
        </Link>
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
