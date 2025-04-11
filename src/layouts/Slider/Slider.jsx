import Slider from "react-slick";
import style from "./Slider.module.css";

export default function SimpleSlider(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { homeProduct } = props;
  return (
    <div className="container">
      <Slider {...settings}>
        {homeProduct && Array.isArray(homeProduct) ? (
          homeProduct.map((product) => (
            <div className={`${style.categoryCard} `} key={product.id}>
              <div className={style.categoryInner}>
                <div className={`${style.categoryIcon} mx-auto mb-3`}>
                  {product.icon}
                </div>
                <h4>{product.name}</h4>
                <p className="text-muted">{product.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No products available</div>
        )}
      </Slider>
    </div>
  );
}
