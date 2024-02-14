'use client';
import React from "react";
import Banner from "@/app/ui/banner";
import bannerImage from "../../public/images/homepage_banner.jpg";
import { CardHolder } from "./ui/cards";
import Testimonials from "./ui/testimonals";

const Page = () => {
  
  return (
    <main>
      <Banner
        bannerImage={bannerImage}
        title="Welcome to Tools Share"
        subtitle="Lease tools within your community"
      
        button={true}
      />
     
       <CardHolder></CardHolder>
       <h3 className="specialTitle"></h3>
       <Testimonials></Testimonials>
    </main>
  );
};

export default Page;