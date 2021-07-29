import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <div id="navigation" className="container-fluid bor1"></div> */}
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          {/* <figure className="logo-box me-2">
            <img src="/resources/design/logo.jpg" alt="logo" />
          </figure> */}
          <NavLink class="navbar-brand fs-3" to="/">
            Mansparsh
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/">
                  Blogs
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  About Me
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  Subscribe
                </NavLink>
              </li>
              {/* <li class="nav-item dropdown">
                <NavLink
                  class="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </NavLink>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink class="dropdown-item" to="/">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link disabled"
                  to="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </NavLink>
              </li> */}
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
