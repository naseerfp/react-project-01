import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link className="nav-item active" to="/">
              Home
            </Link>
            <li className="nav-item">
              <Link to="/Users">
                Users
              </Link>

            </li>


          </ul>

        </div>
      </nav>
    </div>
  )
}

export default Navigation;