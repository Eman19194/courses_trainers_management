import { images } from "../../assets/imgs/index.js";

const Error = () => {
  return (
    <>
      <section className="d-flex flex-column my-5 pt-120">
        <h1 className="text-center text-main fw-bolder mb-3">
          OOPS ! Page Not Found
        </h1>
        <img
          className="w-50 m-auto"
          src={images.error}
          alt="page not found 404"
        />
      </section>
    </>
  );
};

export default Error;
