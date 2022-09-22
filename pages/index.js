// Index page for website 🚀

import React from "react";
import { Cart, Footer, Belowbanner, HeroBanner, Layout, Navbar, Product } from "../components";
import { client } from "../lib/client";

const Home = ({ carsData, bannersData }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroBanner heroBannerData={bannersData.length && bannersData[0]} />
      {/* {console.log(bannersData)} */}
      <div className="products-heading">
        <h2>Best Selling Cars</h2>
        <p>Cars of many variations and prices</p>
      </div>
      <div className="products-container">
        {carsData?.map((car) => (
          <Product key={car._id} product={car} />
        ))}
      </div>
      {console.log(bannersData[0])}
      <Belowbanner footerBanner={bannersData && bannersData[0]} />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const carQuery = '*[_type =="car" ]';
  const carsData = await client.fetch(carQuery);

  const bannerQuery = '*[_type =="banner" ]';
  const bannersData = await client.fetch(bannerQuery);

  return {
    props: { carsData, bannersData },
  };
};
export default Home;
