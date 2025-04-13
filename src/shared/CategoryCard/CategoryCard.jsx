import { Link } from "react-router-dom";
import { images } from "../../assets/imgs/index.js";

const CategoryCard = () => {
  const categories = [
    {
      img: images.pageOne.categoryOne,
      title: "Digital Marketing",
      itemsCount: "26",
    },
    {
      img: images.pageOne.categoryTwo,
      title: "Graphic Design",
      itemsCount: "78",
    },
    {
      img: images.pageOne.categoryThree,
      title: "Web Design",
      itemsCount: "15",
    },
    {
      img: images.pageOne.categoryFour,
      title: "IT & Software",
      itemsCount: "26",
    },
  ];

  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="col-lg col-md-6 col-12">
          <div className="card h-100 box-radius shadow-lg border-0">
            <Link to="/courses">
              <img
                src={category.img}
                className="card-img-top"
                alt="category img"
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title fw-bold">{category.title}</h5>
              <Link
                to="/courses"
                className="card-text text-decoration-none tx-gray"
              >
                {category.itemsCount} Items
                <i className="fa-solid fa-arrow-right tx-gray ps-2"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryCard;
