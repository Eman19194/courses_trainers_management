import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import CourseInfo from "../../components/CourseInfo/CourseInfo.jsx";

export default function CourseDetails() {
  return (
    <>
      <Helmet>
        <title>Course Details</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero
        pageName={"Introduction to User Experience Design"}
        breadcrumb={"Course Details"}
      />

      {/* <!-- Course-details --> */}
      <CourseInfo />
    </>
  );
}
