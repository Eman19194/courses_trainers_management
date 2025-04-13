import "./style.css";
import { images } from "../../assets/imgs";
import { Link } from "react-router-dom";
import Badge from "../../shared/Badge/Badge.jsx";

const Footer = () => {
  return (
      <>
        <footer className="pt-120">
          <div className="container download-app">
            <div className="containerFooter position-relative box-shadow box-radius p-5 align-items-center">
              <div className="row align-items-center gx-5 px-5">
                <div className="col-lg-6">
                  <div>
                    <Badge className={"free"} text={"Download App"} />
                    <h2 className="fw-bold text-white fs-1">
                      Are you Ready to Start your Online Course?
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-sm-flex justify-content-center justify-content-lg-end align-items-center gap-3">
                    <button className="btn bg-blue py-3 border-1 border d-block w-100 mb-3 mb-sm-auto">
                      <Link
                          className="text-decoration-none text-white fw-bold"
                          to="#"
                      >
                        <i className="fa-brands fa-apple pe-2"></i> Apple Store
                      </Link>
                    </button>
                    <button className="btn bg-blue py-3 border-1 border d-block w-100">
                      <Link
                          className="text-decoration-none text-white fw-bold"
                          to="#"
                      >
                        <i className="fa-brands fa-google-play pe-2"></i> Play
                        Store
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-footer bg-purple pt-120">
            <div className="footer-content pt-120 container pb-5">
              <div className="row justify-content-between">
                <div className="col-12 col-sm-6 col-lg-3 mb-5">
                  <div className="content">
                    <div>
                      <Link to="/">
                        <img src={images.logo} alt="logo" />
                      </Link>
                      <p className="pt-3 tx-gray">
                        Through a combination of lectures, readings, discussions,
                        students will gain solid foundation in educational.
                      </p>
                      <div className="social-icons">
                        <Link
                            className="text-decoration-none tx-gray d-inline-block border border-2 text-center align-content-center button-radius me-2"
                            to="https://www.x.com"
                            target="_blank"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                            className="text-decoration-none tx-gray d-inline-block border border-2 text-center align-content-center button-radius me-2"
                            to="https://www.facebook.com"
                            target="_blank"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                            className="text-decoration-none tx-gray d-inline-block border border-2 text-center align-content-center button-radius me-2"
                            to="https://www.linkedin.com"
                            target="_blank"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2 mb-5">
                  <div className="content">
                    <h4>Useful Link</h4>
                    <nav className="nav flex-column">
                      <Link className="nav-link tx-gray" to="about">
                        About Eduan{" "}
                      </Link>
                      <Link className="nav-link tx-gray" to="contact">
                        Contact{" "}
                      </Link>
                      <Link className="nav-link tx-gray" to="contact">
                        Help Centre
                      </Link>
                      <Link className="nav-link tx-gray" to="pricing">
                        Refund
                      </Link>
                      <Link className="nav-link tx-gray" to="blog">
                        Conditions
                      </Link>
                      <Link className="nav-link tx-gray" to="courses">
                        Privacy Policy
                      </Link>
                    </nav>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2 mb-5">
                  <div className="content">
                    <h4>Categories</h4>
                    <nav className="nav flex-column">
                      <Link className="nav-link tx-gray" to="course-details">
                        Design Skills
                      </Link>
                      <Link className="nav-link tx-gray" to="course-details">
                        Development
                      </Link>
                      <Link className="nav-link tx-gray" to="course-details">
                        Marketing
                      </Link>
                      <Link className="nav-link tx-gray" to="course-details">
                        Finance & Accounting
                      </Link>
                      <Link className="nav-link tx-gray" to="course-details">
                        IT & Software
                      </Link>
                      <Link className="nav-link tx-gray" to="course-details">
                        Sales Marketing
                      </Link>
                    </nav>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-5 mb-5">
                  <div className="content">
                    <h4>Newsletter</h4>
                    <p className="tx-gray">
                      Sign up foe our newsletter and get 34% off your next course.
                    </p>
                    <form>
                      <div className="me-2 mb-3 mb-xl-auto w-auto position-relative">
                        <input
                            type="search"
                            className="form-control bg-purple border-1 w-100 p-3 button-radius"
                            placeholder="Enter Your Email*"
                        />
                        <button
                            className="btn position-absolute bg-blue text-white fw-bold"
                            type="button"
                            id="button-addon2"
                        >
                          Subscribe
                        </button>
                      </div>
                      <div className="form-check mt-3">
                        <input
                            className="form-check-input bg-purple border-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label
                            className="form-check-label tx-gray"
                            htmlFor="flexCheckDefault"
                        >
                          I agree to the terms of use and privacy policy.
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyrights border-top border-1 text-center tx-gray p-2">
              <p className="m-0 p-4">
                Copyright &#169; 2023 All Rights Reserved by Eduan
              </p>
            </div>
          </div>
        </footer>
      </>
  );
};

export default Footer;