"use client";
import { Company } from "@/components/Company";
import { TeamCard } from "@/components/TeamCard";
import { RandomUserContext } from "@/context/random-user";
import Image from "next/image";
import { useContext } from "react";

export default function Page() {
  const { teams } = useContext(RandomUserContext);
  return (
    <>
      <section
        id="about-us"
        className="min-h-screen max-w-full flex flex-wrap justify-center self-center flex-col w-full items-center pb-36">
        {/* <h1 className="text-gray-900 font-bold self-center mt-12 lg:pt-14 lg:mt-14 text-4xl max-md:mb-20 ">About Us</h1> */}
        <div
          id="culture"
          className="w-full h-screen relative self-center shadow-lg drop-shadow-2xl bg-black mb-28 ">
          <Image
            className="top-0 left-0 w-full h-screen object-cover   shadow-2xl"
            src="https://images.unsplash.com/photo-1557367184-663fba4b8b91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            fill={true}
          />
          <div className="bg-black/80 absolute top-0 left-0 w-full h-screen   backdrop-blur-sm" />
          <div className="absolute top-0 w-full h-full flex flex-col justify-center text-slate-200 items-center ">
            <div className="max-w-[1100px] absolute p-4 m-4">
              {/* <p className="font-medium my-2">All</p> */}
              <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl   mb-7">
                About Us
              </h1>
              <p className="max-w-[640px] drop-shadow-2xl py-2 text-[1rem] leading-loose text-justify">
              <b>Nyoo Kayu Woodworking</b> was established in 2010 by <b>Markus Udayana</b> and operates in Kabupaten Tangerang, Banten Province, Indonesia. What began a woodworking as  hobby has evolved into a passion-driven. The company blends craftsmanship with sustainability to create premium, eco-friendly furniture.
              </p>
              {/* <button className='bg-white text-black '>Reserve Now</button> */}
            </div>
          </div>
        </div>
        <Company />

        <h2 className="text-gray-900 font-bold self-center py-16 mb-10 text-4xl ">Meet Our Teams</h2>
        <div className="flex sm:flex-row flex-col flex-wrap w-full justify-center items-center gap-5">
          {teams?.map((e: any, i) => (
            <TeamCard props={e} key={i} />
          ))}
        </div>
        {/* <h2 className="text-gray-900 font-bold self-center py-16 mt-24 mb-10 text-4xl ">Our Culture</h2> */}
        {/* <div className="text-gray-900 max-w-2xl flex text-justify leading-loose">
          <p className="mb-6">
            At Nyoo Kayu Woodworking, we foster a culture of creativity, collaboration, and sustainability. Our team is
            passionate about woodworking and is committed to continuous learning and improvement. We believe in the
            power of community and support each other in achieving both personal and professional growth.
          </p>
        </div> */}
        <div
          id="culture"
          className="w-full h-screen relative self-center shadow-lg drop-shadow-2xl bg-black   mb-28 mt-48">
          <Image
            className="top-0 left-0 w-full h-screen object-cover   shadow-2xl"
            src="https://images.unsplash.com/photo-1557367184-663fba4b8b91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            fill={true}
          />
          <div className="bg-black/80 absolute top-0 left-0 w-full h-screen   backdrop-blur-sm" />
          <div className="absolute top-0 w-full h-full flex flex-col justify-center text-slate-200 items-center ">
            <div className="max-w-[1100px] absolute p-4 m-4">
              <p className="font-medium my-2">Quality Oriented</p>
              <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl   mb-7">
                Company Culture
              </h1>
              <p className="max-w-[600px] drop-shadow-2xl py-2 text-[1rem] leading-loose text-justify">
                At Nyoo Kayu Woodworking, we foster a culture of creativity, collaboration, and sustainability. Our team
                is passionate about woodworking and is committed to continuous learning and improvement. We believe in
                the power of community and support each other in achieving both personal and professional growth.
              </p>
              {/* <button className='bg-white text-black '>Reserve Now</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
