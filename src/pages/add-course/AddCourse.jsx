
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import AddCourse from "../../components/AddCourse/AddCourse";


export default function CourseCreation() {
    return (
        <>
            <Helmet>
                <title>Create New Course</title>
            </Helmet>

            <Hero
                pageName={"Create New Course"}
                breadcrumb={"Create New Course"}
            />


            <AddCourse />
        </>
    );
}