import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import TeacherInfo from "../../components/TeacherInfo/TeacherInfo.jsx";

export default function TeacherDetails() {
  return (
    <>
      <Helmet>
        <title>Trainer Details</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Trainer Details"} breadcrumb={"Trainer Details"} />

      {/* <!-- Teacher Details --> */}
      <TeacherInfo />
    </>
  );
}
