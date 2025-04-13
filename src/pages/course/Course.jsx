import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses.jsx";
import Hero from "../../shared/hero/Hero.jsx";
import Pagination from "../../shared/Pagination/Pagination.jsx";
import Search from "../../shared/Search/Search.jsx";
import { Link } from "react-router-dom";

export default function Course() {
    return (
        <>
            <Helmet>
                <title>Courses</title>
            </Helmet>

            {/* <!-- Header Banner --> */}
            <Hero pageName={"Courses Management"} breadcrumb={"Courses"} />

            {/* <!-- Add New Course Section --> */}
            <section className="pt-5 pb-5 bg-light">
                <div className="container text-center">
                    <h2 className="fw-bold text-primary">Add and Manage New Courses to Enhance Learning Opportunities</h2>
                    <p className="tx-gray mb-3">
                        As an admin, you can easily <strong>add new courses</strong>, update course details, manage pricing,
                        and provide students with fresh learning experiences.
                    </p>
                    <Link
                        className="bg-blue fw-bold px-4 py-3"
                        to="/add-course"
                    >
                        Create New Course
                    </Link>
                </div>
            </section>

            {/* <!-- Featured Courses Section --> */}
            <section className="pt-120">
                <div className="container">
                    <Search />

                    <FeaturedCourses className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5" />

                    <Pagination />
                </div>
            </section>
        </>
    );
}
