import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import AllTeachers from "../../components/AllTeachers/AllTeachers.jsx";
import Search from "../../shared/Search/Search";
import Pagination from "../../shared/Pagination/Pagination";

export default function Teachers() {
  return (
    <>
      <Helmet>
        <title>Teachers</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Trainer Management"} breadcrumb={"Trainer Management"} />

      {/* <!-- Teachers --> */}
        <section className="pt-120">
            <div className="container">
                <Search />

                <AllTeachers />

                <Pagination />
            </div>
        </section>


    </>
  );
}
