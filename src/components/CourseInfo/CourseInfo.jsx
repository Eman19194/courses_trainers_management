import { Link } from "react-router-dom";
import "../../shared/hero/style.css";
import { images } from "../../assets/imgs/index.js";

export default function CourseInfo() {
  return (
      <>
        <main className="course-details pt-120">
          <div className="container mt-5">
            <div className="course_Img position-relative">
              <img
                  className="rounded-top"
                  src={images.bigBannerCourse}
                  alt="banner"
              />
            </div>
            <div className="row Course_contant justify-content-center"> {/* Center the content */}
              <div className="col-lg-10"> {/* Increased width to col-lg-10 */}
                <div className="course_Teacher main-white box-shadow box-radius px-5 py-4">
                  <h3>Introduction to User Experience Design</h3>

                  <div className="row p-0 m-0 justify-content-between mt-5">
                    <div className="row col-lg-10 px-0">
                      <div className="col-lg-4 d-flex">
                        <div className="author-img">
                          <img src={images.pageSix.authorOne} alt="" />
                        </div>
                        <div className="author-info ps-2">
                          <span>Teacher</span>
                          <h5>
                            <Link
                                to="/teacher-details"
                                className="text-decoration-none tx-black"
                            >
                              Dylan Meringue
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="col-lg-4 course_category position-relative">
                        <span>Categories</span>
                        <h5>
                          <Link to="#" className="text-decoration-none tx-black">
                            Online Teaching
                          </Link>
                        </h5>
                      </div>
                      <div className="col-lg-4 course_rating position-relative">
                        <span>Review</span>
                        <ul className="p-0 d-flex">
                          <li className="list-group-item">
                            <i className="fa-solid fa-star tx-yellow"></i>
                          </li>
                          <li className="list-group-item">
                            <i className="fa-solid fa-star tx-yellow"></i>
                          </li>
                          <li className="list-group-item">
                            <i className="fa-solid fa-star tx-yellow"></i>
                          </li>
                          <li className="list-group-item">
                            <i className="fa-solid fa-star tx-yellow"></i>
                          </li>
                          <li className="list-group-item">
                            <i className="fa-solid fa-star tx-yellow"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--  --> */}
                <div className="my-5">
                  <ul className="nav">
                    <li className="nav-item">
                      <button className="nav-link active box-radius p-0 d-flex justify-content-center align-items-center">
                        <i className="fa-regular fa-bookmark"></i>
                        <span>Overview</span>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link p-0 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-box"></i>
                        <span>Curriculum</span>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link p-0 d-flex justify-content-center align-items-center">
                        <i className="fa-regular fa-user"></i>
                        <span>Instructor</span>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link p-0 d-flex justify-content-center align-items-center">
                        <i className="fa-regular fa-comment-dots"></i>
                        <span>Reviews</span>
                      </button>
                    </li>
                  </ul>
                </div>
                {/* <!-- -------------- --> */}
                <div className="Courses_Description">
                  <div className="course_content">
                    <h4 className="course_content_title mb-4">
                      Courses Description
                    </h4>
                    <p className="text_gray_opacity">
                      Curabitur tempus tincidunt tellus ac placerat. Nullam non
                      libero nisi. Fusce congue est eget nisl tristique ornare.
                      Vestibulum id massa felis. Nullam vehicula bibendum nulla eu
                      vulputate. Aenean fringilla tortor ut laoreet congue magna,
                      a viverra turpis consectetur porta.
                    </p>
                    <p className="text_gray_opacity">
                      Curabitur tempus tincidunt tellus ac placerat. Nullam non
                      libero nisi. Fusce congue est eget nisl tristique ornare.
                      Vestibulum id massa felis. Nullam vehicula bibendum nulla eu
                      vulputate. Aenean fringilla tortor ut laoreet congue magna,
                      a viverra turpis consectetur porta.
                    </p>
                    <h4 className="course_content-title mt-5">
                      What you will learn in this course
                    </h4>
                    <div className="text_gray_opacity mt-4">
                      <ul className="list-style-disc ps-3">
                        <li>
                          Etyma protium et olio gravida cur abitur est dui
                          viverrid non mi egret
                        </li>
                        <li>
                          Dictum Bibendum sapiens internum malasada fames ac ante
                          ipsum primes
                        </li>
                        <li>
                          Fauci bus cur abitur pulvinar rut rum masa sed so dales
                          sapiens utricles
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
  );
}
