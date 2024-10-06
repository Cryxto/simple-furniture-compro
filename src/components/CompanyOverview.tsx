import Image from "next/image";
import React from "react";
// import { ReactNode } from "react";

export interface CompanyOverviewInterface {
  theImage?: string;
  reverse?: boolean;
  shadow?: boolean;
  children: React.ReactNode;
}

const defaultValue = {
  theImage:
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur consequuntur consequatur inventore
      corrupti, quam dolore temporibus laborum officia molestias explicabo dignissimos, sequi impedit magni amet minima
      mollitia fugiat. Voluptatum.
    </p>
  ),
};

function CompanyOverview(props: CompanyOverviewInterface) {
  return (
    <>
      <div className={`hero lg:min-h-full text-gray-900 py-12   leading-loose `}>
        <div className={`hero-content flex-col md:flex-row${props.reverse ? "-reverse" : ""}`}>
          <figure className="p-3 max-w-96">
            <Image
              src={props.theImage || defaultValue.theImage}
              className={`max-w-full w-full rounded-lg ${props.shadow ? "shadow-2xl" : ""}`}
              // fill={true}
              width={1000}
              height={1000}
              alt="heh"
            />
          </figure>
          <div className="text-justify max-w-sm lg:max-w-xl md:max-w-md p-3">
            {props.children || defaultValue.children}
          </div>
        </div>
      </div>
    </>
  );
}

export { CompanyOverview };
