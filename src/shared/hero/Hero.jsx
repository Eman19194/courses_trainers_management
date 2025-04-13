import { Link } from "react-router-dom";
import { images } from "../../assets/imgs/index.js";
import PropTypes from "prop-types";

export default function Hero({ pageName, breadcrumb }) {
  return (
    <section className="header-banner d-flex flex-column justify-content-center align-items-center position-relative">
      <h1 className="fw-bold">{pageName}</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb fw-bold">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none tx-black">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item tx-blue">{breadcrumb}</li>
        </ol>
      </nav>
      <img
        className="position-absolute"
        src={images.pageTwo.star}
        alt="star symbol"
      />
    </section>
  );
}

Hero.propTypes = {
  pageName: PropTypes.string,
  breadcrumb: PropTypes.string,
};
