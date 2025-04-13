
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import LinkCourseToTrainer from "../../components/LinkCourseToTrainer/LinkCourseToTrainer";

export default function LinkCoursetoTrainer() {
    return (
        <>
            <Helmet>
                <title>Empowering Courses with Trainers</title>
            </Helmet>
            {/* <!-- Header Banner --> */}
            <Hero pageName={"Empowering Courses with Trainers"} breadcrumb={"Link Course To Trainer"} />

            {/* <!-- ------------------------- --> */}
            <LinkCourseToTrainer />
        </>
    );
}
