import { Link } from "react-router-dom";
import { images } from "../../assets/imgs/index.js";
import Badge from "../../shared/Badge/Badge.jsx";

export default function HomeBanner() {
  return (
      <>
        <section className="home-banner bg-light-blue rounded-5">
          <div className="container pt-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="content mb-5 mb-lg-auto">
                  <Badge text={"Online Learning Platform"} />
                  <h1 className="fw-bold tx-black">
                    Manage and Oversee Courses to Empower Learners.
                  </h1>
                  <p className="tx-gray mb-5">
                    Admins can easily manage courses, monitor enrollments, and
                    provide students with a top-quality learning experience.
                  </p>
                  <Link
                      className="btn bg-blue text-white fw-bold px-4 py-3"
                      to="/courses"
                  >
                    Manage Courses
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative banner-img">
                  <img
                      className="img-fluid position-relative z-3"
                      src={images.pageOne.banner}
                      alt="female student"
                  />
                  <img
                      className="position-absolute img-fluid z-0 end-0"
                      src={images.pageOne.ring}
                      alt="ring"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
