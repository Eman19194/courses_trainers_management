import { Link } from "react-router-dom";
import "../../shared/hero/style.css";
import { images } from "../../assets/imgs/index.js";

export default function TeacherInfo() {
  return (
    <>
      <section className="container pt-120">
        <div className="teacher-details d-flex gap-3 mt-5">
          <div className="image">
            <img src={images.teachers.teacherOne} alt="" />
          </div>
          <div className="content">
            <h2 className="text-capitalize">marvin mckinney</h2>
            <p className="text-capitalize">web designer,researcher</p>
            <div className="star d-flex gap-1">
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <p className="rev ms-2">(03 Reviwes)</p>
            </div>
            <h2 className="text-capitalize mt-3">about me</h2>
            <p className="p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis
              itaque quod natus, sint voluptates magnam numquam hic! Nam libero
              veniam dolorum? Accusantium expedita dolorem accusamus tempore
              alias perspiciatis eos.
            </p>
            <p className="p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis
              itaque quod natus, sint voluptates magnam numquam hic! Nam libero
              veniam dolorum.
            </p>
            <h2 className="text-capitalize mt-4">contact me</h2>
            <div className="info">
              <div className="txt gap-3 d-flex">
                <h4 className="text-capitalize mt-2">address:</h4>
                <p className="text-capitalize mt-2">hilton conference center</p>
              </div>
              <div className="txt d-flex">
                <h4 className="text-capitalize">email:</h4>
                <p className="text-capitalize">example@gmail.com</p>
              </div>
              <div className="txt gap-4 d-flex">
                <h4 className="text-capitalize">phone:</h4>
                <p className="">+123 548 6458 50</p>
              </div>
            </div>
            <div className="social d-flex gap-3">
              <div className="twitter">
                <Link
                  className="text-body-tertiary border rounded-circle d-inline-block text-center align-content-center"
                  to=""
                >
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </div>
              <div className="facebook">
                <Link
                  className="text-body-tertiary border rounded-circle d-inline-block text-center align-content-center"
                  to=""
                >
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </div>
              <div className="instagram">
                <Link
                  className="text-body-tertiary border rounded-circle d-inline-block text-center align-content-center"
                  to=""
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </div>
              <div className="linkedin">
                <Link
                  className="text-body-tertiary border rounded-circle d-inline-block text-center align-content-center"
                  to=""
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="featured-courses">
          <div className="container">
            <div className="content">
              <div className="box box-shadow box-radius">
                <div className="image">
                  <Link to="/course-details">
                    <img src={images.pageSix.fCourseOne} alt="course" />
                  </Link>
                </div>
                <div className="reviews">
                  <div className="star d-flex gap-1">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <p className="rev ms-2">(03 Reviwes)</p>
                  </div>
                  <Link
                    className="save bg-gray tx-gray border rounded-circle d-inline-block text-center align-content-center"
                    to=""
                  >
                    <i className="fa-solid fa-bookmark"></i>
                  </Link>
                </div>
                <h2 className="ps-4">
                  <Link
                    className="text-decoration-none tx-black"
                    to="/course-details"
                  >
                    introduction to psychology subject
                  </Link>
                </h2>
                <div className="numbers">
                  <div className="lessons">
                    <i className="fa-solid fa-book"></i>
                    <p>45 lessons</p>
                  </div>
                  <div className="student">
                    <i className="fa-solid fa-person"></i>
                    <p>24 student</p>
                  </div>
                </div>
                <p className="ps-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  sequi nemo, veniam reprehenderit cupiditate fugit?
                </p>
                <div className="author">
                  <img src={images.pageSix.authorOne} alt="author" />
                  <p>
                    <span>BY</span> John michel
                  </p>
                </div>
                <div className="more">
                  <p className="price">
                    $99.00 <span className="old-price">$150</span>
                  </p>
                  <div className="read">
                    <i className="fa-solid fa-arrow-right"></i>
                    <p>
                      <Link
                        className="text-decoration-none tx-gray"
                        to="/course-details"
                      >
                        More Details
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box box-shadow box-radius">
                <div className="image">
                  <Link to="/course-details">
                    <img src={images.pageSix.fCourseTwo} alt="course" />
                  </Link>
                </div>
                <div className="reviews">
                  <div className="star d-flex gap-1">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <p className="rev ms-2">(03 Reviwes)</p>
                  </div>
                  <Link
                    className="save bg-gray tx-gray border rounded-circle d-inline-block text-center align-content-center"
                    to=""
                  >
                    <i className="fa-solid fa-bookmark"></i>
                  </Link>
                </div>
                <h2 className="ps-4">
                  <Link
                    className="text-decoration-none tx-black"
                    to="/course-details"
                  >
                    the science of well-being for teens
                  </Link>
                </h2>
                <div className="numbers">
                  <div className="lessons">
                    <i className="fa-solid fa-book"></i>
                    <p>45 lessons</p>
                  </div>
                  <div className="student">
                    <i className="fa-solid fa-person"></i>
                    <p>24 student</p>
                  </div>
                </div>
                <p className="ps-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  sequi nemo, veniam reprehenderit cupiditate fugit?
                </p>
                <div className="author">
                  <img src={images.pageSix.authorTwo} alt="author" />
                  <p>
                    <span>BY</span> Hanson deck
                  </p>
                </div>
                <div className="more">
                  <p className="price">
                    $99.00 <span className="old-price">$150</span>
                  </p>
                  <div className="read">
                    <i className="fa-solid fa-arrow-right"></i>
                    <p>
                      <Link
                        className="text-decoration-none tx-gray"
                        to="/course-details"
                      >
                        More Details
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box box-shadow box-radius">
                <div className="image">
                  <Link to="/course-details">
                    <img src={images.pageSix.fCourseThree} alt="course" />
                  </Link>
                </div>
                <div className="reviews">
                  <div className="star d-flex gap-1">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <p className="rev ms-2">(03 Reviwes)</p>
                  </div>
                  <Link
                    className="save bg-gray tx-gray border rounded-circle d-inline-block text-center align-content-center"
                    to=""
                  >
                    <i className="fa-solid fa-bookmark"></i>
                  </Link>
                </div>
                <h2 className="ps-4">
                  <Link
                    className="text-decoration-none tx-black"
                    to="/course-details"
                  >
                    Complete angular developer at 2024
                  </Link>
                </h2>
                <div className="numbers">
                  <div className="lessons">
                    <i className="fa-solid fa-book"></i>
                    <p>45 lessons</p>
                  </div>
                  <div className="student">
                    <i className="fa-solid fa-person"></i>
                    <p>24 student</p>
                  </div>
                </div>
                <p className="ps-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  sequi nemo, veniam reprehenderit cupiditate fugit?
                </p>
                <div className="author">
                  <img src={images.pageSix.authorThree} alt="author" />
                  <p>
                    <span>BY</span> Erik wid get
                  </p>
                </div>
                <div className="more">
                  <p className="price">
                    $99.00 <span className="old-price">$150</span>
                  </p>
                  <div className="read">
                    <i className="fa-solid fa-arrow-right"></i>
                    <p>
                      <Link
                        className="text-decoration-none tx-gray"
                        to="/course-details"
                      >
                        More Details
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
