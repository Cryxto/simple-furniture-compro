import Image from "next/image";

function Hero() {
  return (
    // <div className="inline-block">
    //   <img
    //     src="https://images.unsplash.com/photo-1614451153744-0c4f015f4d68?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     alt=""
    //   />
    // </div>

    <section id="hero" className="w-full h-screen relative self-center shadow-lg drop-shadow-2xl bg-black rounded-br-[20rem] mb-28">
      <Image
        className="top-0 left-0 w-full h-screen object-cover rounded-br-[20rem] shadow-2xl"
        src="https://images.unsplash.com/photo-1614451153744-0c4f015f4d68?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
        fill={true}
      />
      <div className="bg-black/80 absolute top-0 left-0 w-full h-screen rounded-br-[20rem]" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-slate-100 items-center ">
        <div className="max-w-[1100px] absolute p-4 m-4 ">
          <p className="font-medium">Quality Oriented</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl rounded-br-[20rem]">Woodworking Solution</h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl leading-loose">
            with the best quality material and service, eco friendly and harmless to the environment
          </p>
          {/* <button className='bg-white text-black '>Reserve Now</button> */}
        </div>
      </div>
    </section>
  );
}
export { Hero };
