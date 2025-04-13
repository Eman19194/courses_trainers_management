import "./style.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({
                                 img,
                                 imgLogo,
                                 universityName,
                                 title,
                                 booksCount,
                                 usersCount,
                                 discountPrice,
                                 price,
                                 onDelete,
                             }) {
    return (
        <div className="col">
            <div className="card h-100 box-radius border-0 shadow-lg p-2">
                <div className="card-img-container">
                    {/* Image with delete icon on top */}
                    <Link to="/course-details">
                        <img src={img} className="card-img-top" alt="course-img" />
                    </Link>
                    {/* Delete Icon (rectangle button) */}
                    <button
                        className="btn btn-danger delete-button"
                        onClick={onDelete}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>

                <div className="card-body">
                    <div>
                        <img src={imgLogo} alt="University logo" />
                        <span className="tx-gray ps-3">{universityName}</span>
                    </div>
                    <h5 className="card-title fw-bold my-3">
                        <Link className="text-decoration-none tx-black" to="/course-details">
                            {title}
                        </Link>
                    </h5>
                </div>

                <div className="card-footer bg-white d-flex justify-content-between justify-content-center pt-3">
                    <div className="tx-gray">
                        <i className="fa-solid fa-book pe-2"></i>
                        <span className="pe-3">{booksCount}</span>
                        <i className="fa-regular fa-user"></i>
                        <span>{usersCount}</span>
                    </div>
                    <div className="fw-bold tx-blue">
                        <span className="text-decoration-line-through tx-gray pe-2">
                            {discountPrice}
                        </span>
                        {price}
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    imgLogo: PropTypes.string.isRequired,
    universityName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    booksCount: PropTypes.string.isRequired,
    usersCount: PropTypes.string.isRequired,
    discountPrice: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};
