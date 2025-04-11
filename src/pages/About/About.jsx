import { MdOutlineRoundaboutRight } from "react-icons/md";
import style from "./About.module.css";
import img1 from "../../assets/aboutus.jpg";
import img2 from "../../assets/mission.jpg";
import img3 from "../../assets/safety.jpg";

export default function About() {
  return (
    <div>
      <div className={style.aboutHeader}>
        <h1 className="text-white">About</h1>
      </div>
      <div className="container section-spacing">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="d-flex align-items-center">
              <MdOutlineRoundaboutRight className="text-black fs-2" />
              <h2>About Us</h2>
            </div>
            <p className="text-muted">
              The establishment of CityFarm, a family business that is being
              passed down from father to son, began in 1964 with the help of an
              outstanding team of industry professionals with extensive
              experience in Spices, Juices, frozen food and vegetable
              processing. In order to serve our extended family, which is you,
              the consumer with the highest quality of ingredients, we chose the
              rich soil of Egypt to construct our vision. Year after year, City
              Farm markets span across Canada, United States of America, Mexico,
              Europe, England, Australia and the Middle East.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img src={img1} className="w-100 rounded" alt="about us image " />
          </div>
        </div>
      </div>

      <div className="section-color">
        <div className="container section-spacing">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div className="d-flex align-items-center">
                <MdOutlineRoundaboutRight className="text-black fs-2" />
                <h2>Our Mission</h2>
              </div>
              <p className="text-muted">
                Having a professional & passionate team of foodies who share a
                love for cooking and a commitment to quality we are dedicated to
                making your dining experience one to remember. In aims to do so
                we will continue to provide you with the highest quality of food
                that not only tastes outstanding but is also affordable,
                convenient and full of nutritions that will nourish your soul
                and body.
              </p>
            </div>
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <img
                src={img2}
                className="w-100 rounded"
                alt="our misssion image "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container section-spacing">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="d-flex align-items-center">
              <MdOutlineRoundaboutRight className="text-black fs-2" />
              <h2>Food safety and Regulations in Our company</h2>
            </div>
            <p className="text-muted">
              Food and Beverage goods must adhere to certain standards; because
              of this at City Farm we abide by very strict hygienic laws and
              guidelines to guarantee food safety and dependability while
              preserving productivity. In order to ensure that all our Food
              products do fulfill the necessary standards for the American
              market, we comply with all FDA laws.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img src={img3} className="w-100 rounded" alt="about us image " />
          </div>
        </div>
      </div>
    </div>
  );
}
