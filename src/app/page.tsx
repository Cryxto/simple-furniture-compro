import { CompanyOverview, CompanyOverviewInterface } from "@/components/CompanyOverview";
import { Hero } from "../components/Hero";
import { Products } from "@/components/Products";
import { ModalProduct } from "@/components/ModalProduct";
import React from "react";
import { Testimony } from "@/components/Testimony";
import { Tagline } from "@/components/Tagline";

export default function Home() {
  const companyOverviewData: CompanyOverviewInterface[] = [
    {
      theImage:
        "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      children: ( 
        <>
          <p className="py-6">
            <b>Nyoo Kayu Woodworking</b> was established in 2010 by <b>Markus Udayana</b> and operates in Kabupaten
            Tangerang, Banten Province, Indonesia. What began a woodworking as  hobby has evolved into a passion-driven. The company blends craftsmanship with sustainability to create premium, eco-friendly furniture.
          </p>
        </>
      )
      ,
    },
    {
      theImage:
        "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      children: ( 
        <>
          <p className="py-6">
            <i><b>'Nyoo'</b></i> signifies 'bermain' or 'mainan' (as a verb), reflecting our frequent engagement with wood
            craftsmanship, <i><b>'Kayu'</b></i> represents our primary material—wood, and <i><b>'Woodworking'</b></i> underscores our expertise. Each piece is meticulously crafted to ensure durability and quality, enhancing both aesthetics and
            functionality. We use water-based, non-toxic finishes that are safe for humans and the environment, and our
            commitment to sustainability is demonstrated through the use of recycled pine wood. Explore our range,
            including child-friendly educational blocks, and experience the dedication embedded in every piece.
          </p>
        </>
      )
      ,
    },
    {
      theImage:
        "https://images.unsplash.com/photo-1585800935411-d7d7eed23ccc?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      children: ( 
        <>
          <p className="py-6">
            We use water-based, non-toxic finishes that are safe for humans and the environment, and our
            commitment to sustainability is demonstrated through the use of recycled pine wood. Explore our range,
            including child-friendly educational blocks, and experience the dedication embedded in every piece.
          </p>
        </>
      )
      ,
    },
  ];
  let reverse = false;

  return (
    <>
      <Hero />
      <section id="company-overview" className="pb-24">
      {companyOverviewData.map((data, i) => {
        data.reverse = reverse;
        data.shadow = true;
        reverse = !reverse;
        return <CompanyOverview key={i} {...data} />;
      })}
      </section>
      <Products />
      <Testimony/>
      <Tagline/>


      {/* <Modal /> */}

      {/* <div className="bg-green-600 w-screen relative self-center flex justify-center">
        <div className="max-w-6xl w-full bg-red-200 self-center text-center">
          <h1>dasd</h1>
        </div>
      </div> */}
      {/* <h1>me content</h1> */}
      {/* <div className="bg-gray-300 w-full h-full p-4">
        <h1>me content</h1>
      </div> */}
      {/* <Hero /> */}
      {/* <div className="bg-green-600 w-screen relative self-center flex justify-center">
        <div className="max-w-6xl w-full bg-red-200 self-center ">
          <h1>dasd</h1>
        </div>
      </div> */}
      {/* <Hero /> */}
    </>
  );
}
