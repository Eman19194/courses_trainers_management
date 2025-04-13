import PropTypes from "prop-types";

const Badge = ({ className = "", text }) => {
  return (
    <>
      <span
        className={`${className} bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block`}
      >
        {text}
      </span>
    </>
  );
};

Badge.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Badge;
