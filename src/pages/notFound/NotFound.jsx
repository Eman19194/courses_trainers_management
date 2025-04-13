import { Helmet } from "react-helmet";
import Error from "../../components/Error/Error.jsx";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found!</title>
      </Helmet>
      <Error />
    </>
  );
};

export default NotFound;
