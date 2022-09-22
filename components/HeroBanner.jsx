import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBannerData }) => {
  return (
    <div className="hero-banner-container">
      <div>
        {/* <style jsx>{`
          .hero-banner-bg-image {
            background-image: url(urlFor(heroBannerData.image));
          }
        `}</style> */}
        <p className="beats-solo">{heroBannerData.smallText}</p>
        <h3>{heroBannerData.midText}</h3>
        <h1>{heroBannerData.largeText1}</h1>
        <img src={urlFor(heroBannerData.image)} alt="Cars" className="hero-banner-image" />
        <div>
          <Link href={`/product/${heroBannerData.product}`}>
            <button type="button">{heroBannerData.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBannerData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
