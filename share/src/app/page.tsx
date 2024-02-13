'use client';
import React from "react";
import Banner from "@/app/ui/banner";
import bannerImage from "../../public/images/banner1.jpg";
import { CardHolder } from "./ui/cards";
import Testimonials from "./ui/testimonals";

const Page = () => {
  // Define constants for the number of orders delivered and registered creators
 

  return (
    <main>
      <Banner
        bannerImage={bannerImage}
        title="Welcome to Tools Share"
        subtitle="Lease tools within your community"
      
        button={true}
      />
      <h2>Our Community</h2>
       <CardHolder></CardHolder>
       <h3 className="specialTitle">Learn more about the Individuals leasing out products at Tools Share</h3>
       <Testimonials></Testimonials>
    </main>
  );
};

export default Page;