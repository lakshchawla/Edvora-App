import React from "react";

function Header(props) {
  return (
    <div>
    <nav class="navbar Navbar">
        <div class="container-fluid">
            <h1 class="h2">Edvora</h1>
            <div class="d-flex">
                <h5 className="me-3 mt-1">Dhruv Singh</h5>
            </div>
        </div>
    </nav>

      <ul className="nav ms-auto me-auto col-10 mt-2">
        <li className="nav-item ms-2">
          <a className="nav-link" aria-current="page" href="#">
            Nearest Rides
          </a>
        </li>
        <li className="nav-item ms-2">
          <a className="nav-link Active" href="#">
            Upcoming Rides({props.count})
          </a>
        </li>
        <li className="nav-item ms-2">
          <a className="nav-link" href="#">
            Past Rides
          </a>
        </li>

        <li className="nav-item ms-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-filter-left me-2"
                viewBox="0 0 16 16"
              >
                <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
              Filters
            </button>

            <div className="dropdown-menu dropdown-menu-lg-end">
              <h5>Filters</h5>

              <div className="dropdown">
                <button
                  className="btn btn-secondary secondary-dropdown"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  State
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
                <button
                  className="mt-2 btn btn-secondary secondary-dropdown"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  City
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
