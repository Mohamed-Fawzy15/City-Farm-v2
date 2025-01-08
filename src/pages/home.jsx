import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/homeStyle.css";
import "../styles/globalStyle.css";
import NavBar from "../layouts/navbar";
import about from "../assets/about.jpg";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Card from "../layouts/Card/Card";

const HomePage = () => {
  const homeProduct = [
    {
      id: 1,
      name: "Frozen",
      icon: "fa-solid fa-leaf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, consequuntur quos. Expedita voluptatem autem voluptatum.",
    },
    {
      id: 2,
      name: "Frozen",
      icon: "fa-solid fa-leaf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, consequuntur quos. Expedita voluptatem autem voluptatum.",
    },
    {
      id: 3,
      name: "Frozen",
      icon: "fa-solid fa-leaf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, consequuntur quos. Expedita voluptatem autem voluptatum.",
    },
    {
      id: 4,
      name: "Frozen",
      icon: "fa-solid fa-leaf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, consequuntur quos. Expedita voluptatem autem voluptatum.",
    },
    {
      id: 5,
      name: "Frozen",
      icon: "fa-solid fa-leaf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, consequuntur quos. Expedita voluptatem autem voluptatum.",
    },
    {
      id: 6,
      name: "Frozen",
      icon: "fa-solid fa-leaf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, consequuntur quos. Expedita voluptatem autem voluptatum.",
    },
  ];

  return (
    <div>
      <NavBar />
      <header className=" hero d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-white text-capitalize ">welcome</h2>
        <h1 className="display-1 fw-bold">City Farm USA</h1>
      </header>

      <main>
        {/* start of about section */}
        <section className="about section-spacing">
          <div className="container">
            <div className="row gy-4 justify-content-center align-items-center">
              <div className="col-12 col-md-12 col-lg-4 rounded-3">
                <img src={about} className="w-100 rounded-3" alt="hello" />
              </div>
              <div className="col-12 col-md-12 col-lg-8">
                <h3 className="about-header">About Us</h3>
                <p className="text-muted my-5 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  quisquam velit provident? Perferendis deleniti consectetur
                  eaque architecto sed quae facere alias aperiam inventore, fuga
                  aut optio facilis aspernatur necessitatibus commodi expedita.
                  Sint assumenda sapiente voluptatibus in consequatur harum,
                  perferendis tempora eaque vitae hic velit quidem odio maiores
                  itaque enim aperiam eveniet. Aliquid magnam itaque modi quis
                  quam minima sequi expedita quo ea earum, suscipit tenetur ut a
                  deserunt impedit nam molestias voluptate, corrupti corporis?
                  Aspernatur fugiat enim et, ipsam animi consectetur! Quam
                  dignissimos quia repellendus voluptates ipsa eveniet assumenda
                  dolores laudantium, vel quaerat alias temporibus maxime
                  accusantium animi fuga commodi.
                </p>
                <ul className="list-unstyled d-flex gap-4 about-social">
                  <li className="border border-black">
                    <a href="https://www.facebook.com/" className="">
                      <FaFacebookF className=" fs-3" />
                    </a>
                  </li>
                  <li className="border border-black">
                    <a href="https://x.com/?lang=en">
                      <RiTwitterXLine className=" fs-3" />
                    </a>
                  </li>
                  <li className="border border-black">
                    <a href="https://www.facebook.com/">
                      <FaLinkedinIn className="fs-3" />
                    </a>
                  </li>
                  <li className="border border-black">
                    <a href="https://www.facebook.com/">
                      <FaInstagram className="fs-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* end of about section */}

        {/* start of category section */}
        <section className="category section-spacing text-center section-color">
          <div className="container">
            <h2 className="section-header text-capitalize">products</h2>
            <div className="row gy-4">
              {homeProduct.map((ele) => (
                <Card key={ele.id} product={ele} />
              ))}
                {/* 
                <div className="category-card col-12 col-md-6 col-lg-4">
                  <div className="category-inner">
                    <div className="category-icon mx-auto mb-3">
                      <i className="fa-solid fa-leaf icon" />
                    </div>
                    <h4>Category</h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis, consequuntur quos. Expedita voluptatem autem
                      voluptatum.
                    </p>
                  </div>
                </div>
                <div className="category-card col-12 col-md-6 col-lg-4">
                  <div className="category-inner">
                    <div className="category-icon mx-auto mb-3">
                      <i className="fa-solid fa-glass-water icon" />
                    </div>
                    <h4>Category</h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis, consequuntur quos. Expedita voluptatem autem
                      voluptatum.
                    </p>
                  </div>
                </div>
                <div className="category-card col-12 col-md-6 col-lg-4">
                  <div className="category-inner">
                    <div className="category-icon mx-auto mb-3">
                      <i className="fa-solid fa-seedling icon" />
                    </div>
                    <h4>Category</h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis, consequuntur quos. Expedita voluptatem autem
                      voluptatum.
                    </p>
                  </div>
                </div>
                <div className="category-card col-12 col-md-6 col-lg-4">
                  <div className="category-inner">
                    <div className="category-icon mx-auto mb-3">
                      <i className="fa-solid fa-mortar-pestle icon" />
                    </div>
                    <h4>Category</h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis, consequuntur quos. Expedita voluptatem autem
                      voluptatum.
                    </p>
                  </div>
                </div>
                <div className="category-card col-12 col-md-6 col-lg-4">
                  <div className="category-inner">
                    <div className="category-icon mx-auto mb-3">
                      <i className="fa-solid fa-jar icon" />
                    </div>
                    <h4>Category</h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis, consequuntur quos. Expedita voluptatem autem
                      voluptatum.
                    </p>
                  </div>
                </div>
                <div className="category-card col-12 col-md-6 col-lg-4">
                  <div className="category-inner">
                    <div className="category-icon mx-auto mb-3">
                      <i className="fa-solid fa-cookie-bite icon" />
                    </div>
                    <h4>Category</h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis, consequuntur quos. Expedita voluptatem autem
                      voluptatum.
                    </p>
                  </div>
                </div> */}
            </div>
          </div>
        </section>
        {/* end of category section */}
      </main>
    </div>
  );
};

export default HomePage;
