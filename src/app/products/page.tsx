"use client";
import ProductsData from "@/components/ProductsData";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <section id="products" className="self-center flex flex-col items-center text-black">
        <div
          id="product-brief"
          className="w-full h-screen relative self-center shadow-lg drop-shadow-2xl bg-black mb-28 ">
          <Image
            className="top-0 left-0 w-full h-screen object-cover   shadow-2xl"
            src="https://images.unsplash.com/photo-1604535302091-88c788c5bff7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            fill={true}
          />
          <div className="bg-black/80 absolute top-0 left-0 w-full h-screen   backdrop-blur-sm" />
          <div className="absolute top-0 w-full h-full flex flex-col justify-center text-slate-200 items-center ">
            <div className="max-w-[1100px] absolute p-4 m-4">
              {/* <p className="font-medium my-2">All</p> */}
              <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl   mb-7">Our Product</h1>
              <p className="max-w-[640px] drop-shadow-2xl py-2 text-[1rem] leading-loose text-justify">
              Explore our diverse range of products and service, including child-friendly educational blocks, which embody our dedication to craftsmanship and sustainability. Every item we produce is a testament to our commitment to quality and environmental responsibility. Every service we provide is driven by quality and heart.
              </p>
              {/* <button className='bg-white text-black '>Reserve Now</button> */}
            </div>
          </div>
        </div>
        {/* <h1 className="text-gray-900 font-bold self-center py-16 text-4xl ">Our Product</h1> */}
        <div role="tablist" className="tabs tabs-bordered flex justify-center space-x-4 m-4">
          <button
            role="tab"
            aria-selected={activeTab === 1}
            className={`tab text-gray-900 text-2xl h-full font-bold border-2 ${activeTab === 1 ? "tab-active" : ""}`}
            onClick={() => setActiveTab(1)}>
            Product Based
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 2}
            className={`tab text-gray-900 text-2xl h-full font-bold border-2 ${activeTab === 2 ? "tab-active" : ""}`}
            onClick={() => setActiveTab(2)}>
            Service Based
          </button>
          {/* <button
            role="tab"
            aria-selected={activeTab === 3}
            className={`tab text-lg font-bold border-2 ${activeTab === 3 ? "tab-active" : ""}`}
            onClick={() => setActiveTab(3)}
          >
            Tab 3
          </button> */}
        </div>
        <div className="tab-content-container p-10">
          {activeTab === 1 && (
            <div role="tabpanel">
              <ProductsData maxShow={-1} productType="product" />
            </div>
          )}
          {activeTab === 2 && (
            <div role="tabpanel">
              <ProductsData maxShow={-1} productType="service" />
            </div>
          )}
          {/* {activeTab === 3 && <div role="tabpanel">Tab content 3</div>} */}
        </div>
      </section>
    </>
  );
}
