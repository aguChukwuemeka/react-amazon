import React from "react";
import headerImg from "../assets/banner.jpg";
import Products from "../components/products";
import img1 from "../assets/images/qq1.jpg";
import img2 from "../assets/images/qq3.jpg";

export default function ProductList() {
  return (
    <div className="col-10 mx-auto">
      <img src={headerImg} className="banner__image img-fluid" alt="" />
      <div className="products__row">
        <Products
          id="12321341"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          image={img1}
          price={199.99}
          rating={5}
        />
        <Products
          id="49538094"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          image={img2}
          price={199.99}
          rating={5}
        />
      </div>
      <div className="products__row">
        <Products
          id="12321341"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          image={img1}
          price={199.99}
          rating={5}
        />
        <Products
          id="49538094"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          image={img2}
          price={199.99}
          rating={5}
        />
        <Products
          id="49538094"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          image={img2}
          price={199.99}
          rating={5}
        />
      </div>
      <div className="products__row">
        <Products
          id="12321341"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          image={img1}
          price={199.99}
          rating={5}
        />
        <Products
          id="49538094"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          image={img2}
          price={199.99}
          rating={5}
        />
        <Products
          id="49538094"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          image={img2}
          price={199.99}
          rating={5}
        />
        <Products
          id="49538094"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          image={img2}
          price={199.99}
          rating={5}
        />
      </div>
      <div className="products__row">
        <Products
          id="12321341"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          image={img1}
          price={199.99}
          rating={5}
        />
      </div>
    </div>
  );
}

// "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg";
