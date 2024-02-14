import { Metadata } from "next";
import React from 'react';
import "@/app/ui/globals.css";
import CatalogCard from "./CatalogCard/Card";
import Banner from "../ui/banner";
import bannerImg from "../../../public/images/banner3.jpg"

export const metadata: Metadata = {
  title: "Tools Share Catalog",
};


export default function Catalog() {
  return (
    <>
    <Banner 
      bannerImage={bannerImg}
      title="Tools"></Banner>
    <CatalogCard></CatalogCard>
    </>
  );
}
