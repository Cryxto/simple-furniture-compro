import Image from "next/image";

function Tagline() {
  return (
    <>
      <section
        id="tagline"
        className="w-full h-screen relative self-center drop-shadow-lg  shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_-10px_15px_-3px_rgba(0,0,0,0.1)] mb-44 mt-10 pb-44 items-center justify-center">
        {/* <Image
            className="top-0 left-0 w-full h-screen object-cover   shadow-2xl"
            src="https://images.unsplash.com/photo-1557367184-663fba4b8b91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            fill={true}
          /> */}
        <div className=" absolute top-0 left-0 w-full h-screen   backdrop-blur-sm" />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-slate-200 items-center ">
          <div className="max-w-[1100px] absolute p-4 m-4">
            <p className="max-w-[600px] drop-shadow-2xl py-2 text-4xl lg:text-5xl leading-loose lg:leading-loose  text-gray-900 italic font-bold">
              "A quality oriented of woodcraft just for you, driven by passion and heart"
            </p>
            {/* <button className='bg-white text-black '>Reserve Now</button> */}
          </div>
        </div>
      </section>
    </>
  );
}

export { Tagline };
