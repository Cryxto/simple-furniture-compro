"use client";
import { TeamCard } from "@/components/TeamCard";
import { RandomUserContext } from "@/context/random-user";
import Image from "next/image";
import { useContext } from "react";

export default function Page() {
  const { teams } = useContext(RandomUserContext);
  return (
    <>
      <section
        id="teams-page"
        className="flex flex-wrap justify-center self-center flex-col w-full items-center  pb-36">
        {/* <h1 className="text-gray-900 font-bold self-center py-16 text-4xl ">Meet Our Team</h1> */}
        <div
          id="team-brief"
          className="w-full h-screen relative self-center shadow-lg drop-shadow-2xl bg-black mb-28 ">
          <Image
            className="top-0 left-0 w-full h-screen object-cover shadow-2xl"
            src="https://images.unsplash.com/photo-1547609434-b732edfee020?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            fill={true}
          />
          <div className="bg-black/70 absolute top-0 left-0 w-full h-screen" />
          <div className="absolute top-0 w-full h-full flex flex-col justify-center text-slate-200 items-center ">
            <div className="max-w-[1100px] absolute p-4 m-4">
              {/* <p className="font-medium my-2">All</p> */}
              <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl   mb-7">Meet Our Team</h1>
              <p className="max-w-[640px] drop-shadow-2xl py-2 text-[1rem] leading-loose text-justify">
              At Nyoo Kayu Woodworking, our team is our greatest asset. Comprised of skilled craftsmen, creative designers, and dedicated professionals, we work together to bring you the finest in eco-friendly furniture. Each team member brings a unique set of skills and a shared passion for sustainability and quality.
              </p>
              {/* <button className='bg-white text-black '>Reserve Now</button> */}
            </div>
          </div>
        </div>
        
        
        <div className="flex sm:flex-row flex-col flex-wrap w-full justify-center items-center gap-5">
          {teams?.map((e: any, i) => (
            <TeamCard props={e} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
