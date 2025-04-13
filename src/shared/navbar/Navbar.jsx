import "./style.css";
import { images } from "../../assets/imgs";
import { Link } from "react-router-dom";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("box-shadow");
    } else {
      navbar.classList.remove("box-shadow");
    }
  });

  return (
    <header>
      <nav className="navbar navbar-expand-xl fixed-top fw-bold bg-body">
        <div className="container py-3">
          <Link className="navbar-brand position-relative" to="/">
            <img src={images.logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ps-xl-4 pe-xl-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item pe-xl-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="courses"
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item pe-xl-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="teachers"
                >
                  Teachers
                </Link>
              </li>
              <li className="nav-item pe-xl-3">
                <Link
                    className="nav-link active"
                    aria-current="page"
                    to="link-course-trainer"
                >
                  Link Course To Trainer
                </Link>
              </li>
              <li className="nav-item pe-xl-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="payment-management"
                >
                  Payment Management
                </Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <div className="input-group me-2 mb-3 mb-xl-auto w-auto">
                <input
                  type="search"
                  className="form-control bg-gray border-0"
                  placeholder="Search Item"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="bg-gray input-group-text border-0"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
