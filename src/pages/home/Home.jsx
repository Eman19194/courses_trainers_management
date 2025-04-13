import "./style.css";
import { Helmet } from "react-helmet";
import HomeBanner from "../../components/HomeBanner/HomeBanner.jsx";
import PopularCategories from "../../components/PopularCategories/PopularCategories.jsx";
import Dashboard from "../../components/Dashboard/Dashbord";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeBanner />
      <Dashboard/>
      <PopularCategories />


    </>
  );
}
