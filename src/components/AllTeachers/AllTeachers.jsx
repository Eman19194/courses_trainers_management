import { Link } from "react-router-dom";
import "../../shared/hero/style.css";
import { images } from "../../assets/imgs";
import TeacherCard from "../../shared/TeacherCard/TeacherCard.jsx";

export default function AllTeachers() {
  return (
    <>
      <section >
        <div className="container">
          <div className="row g-3 mb-5">
            <div className="col-xl-6 col-lg-8 col-md-12 align-items-stretch">
              <div className="instructor box-radius d-flex justify-content-center flex-column p-5">
                <h2 className="fw-bold fs-1 mb-5 line tx-black">
                  Manage the Most <br />
                  Experienced
                  <span className="position-relative ms-2">
                    Trainers
                    <img
                      className="position-absolute"
                      src={images.underline}
                      alt="line"
                    />
                  </span>
                </h2>

                <div>
                  <Link
                    className="btn bg-blue px-3 py-2 text-white fw-bold text-decoration-none"
                    to="/add-teacher"
                  >
                    Add New Trainer
                  </Link>
                </div>
              </div>
            </div>
            <TeacherCard showAll={true} />
          </div>
        </div>
      </section>
    </>
  );
}
