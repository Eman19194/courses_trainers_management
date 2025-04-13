
import { images } from "../../assets/imgs";
import CategoryCard from "../../shared/CategoryCard/CategoryCard.jsx";
import Badge from "../../shared/Badge/Badge.jsx";



export default function PopularCategories() {
  return (
    <>
    <section className="pt-120 mb-5">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h5 className="tx-gray fw-bold text-center mb-5">
                    340+ Leading Universities And Companies
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="companies d-flex justify-content-evenly align-content-center gap-5 flex-wrap border border-1 py-4">
                    <img
                      className="opacity-25"
                      src={images.pageOne.dropbox}
                      alt="dropbox logo"
                    />
                    <img
                      className="opacity-25"
                      src={images.pageOne.clickUp}
                      alt="dropbox logo"
                    />
                    <img
                      className="opacity-25"
                      src={images.pageOne.shopify}
                      alt="dropbox logo"
                    />
                    <img
                      className="opacity-25"
                      src={images.pageOne.intu}
                      alt="dropbox logo"
                    />
                    <img
                      className="opacity-25"
                      src={images.pageOne.slack}
                      alt="dropbox logo"
                    />
                    <img
                      className="opacity-25"
                      src={images.pageOne.twilio}
                      alt="dropbox logo"
                    />
                  </div>
                </div>
              </div>

              <div className="categories row align-items-center pt-120">
                <div className="col-lg-3 mb-5 mb-lg-0">
                  <Badge text={"Browse Categories"} />
                  <h1 className="fw-bold tx-black mb-4">Popular Categories</h1>
                  <div className="d-flex justify-content-start gap-2">
                    <i
                      className="fa-solid fa-arrow-left border rounded-circle shadow-lg tx-gray p-3"
                      role="button"
                    ></i>
                    <i
                      className="fa-solid fa-arrow-right border rounded-circle shadow-lg tx-gray p-3"
                      role="button"
                    ></i>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row row-cols-1 row-cols-md-4 g-4">
                    <CategoryCard />
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
