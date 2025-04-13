import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link tx-gray" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link tx-gray" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link tx-gray" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link tx-gray" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link tx-gray" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;
