import { Row, Col, Image } from "react-bootstrap";

const baseUrl = import.meta.env.BASE_URL;

const FoodMenuCategories = () => {
  const scrollToAnchor = (anchorId) => {
    const anchorElement = document.getElementById(anchorId);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Row className="mt-5 gap-4 px-3 px-lg-2">
      <Col
        className="categories__box card-custom"
        onClick={() => scrollToAnchor("pizzasMenu")}
      >
        <Image
          src={`${baseUrl}assets/img/category-pizzas.jpg`}
          width={160}
          className="categories__img"
        />
        <div className="fs-4 mt-4 pt-4">
          Pizzas <span className="text-emphasis">Artesanales</span>
        </div>
      </Col>
      <Col
        className="categories__box card-custom"
        onClick={() => scrollToAnchor("sideDishesMenu")}
      >
        <Image
          src={`${baseUrl}assets/img/category-sides.webp`}
          width={160}
          className="categories__img"
        />
        <div className="fs-4 mt-4 pt-4">
          Deliciosos <span className="text-emphasis">Acompañamientos</span>
        </div>
      </Col>
      <Col
        className="categories__box card-custom"
        onClick={() => scrollToAnchor("beveragesMenu")}
      >
        <Image
          src={`${baseUrl}assets/img/category-beverages.jpg`}
          width={160}
          className="categories__img"
        />
        <div className="fs-4 mt-4 pt-4">
          Bebestibles <span className="text-emphasis">Refrescantes</span>
        </div>
      </Col>
    </Row>
  );
};

export default FoodMenuCategories;
