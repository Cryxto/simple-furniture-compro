"use client";

import { RandomUserContext } from "@/context/random-user";
import Image from "next/image";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

function Testimony() {
  const [intervalTime, setIntervalTime] = useState<number>(6600); // 6.6 seconds
  const ref = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const resetTimeout = useRef<NodeJS.Timeout | null>(null);
  const { testimonies } = useContext(RandomUserContext);

  // Scroll to the middle on load
  useEffect(() => {
    if (ref.current) {
      const middleScrollPosition = ref.current.scrollWidth / 2 - ref.current.clientWidth / 2;
      ref.current.scroll({ left: middleScrollPosition, behavior: "smooth" });
    }
    startAutoScroll();
    return () => {
      stopAutoScroll();
    };
  }, []);

  // Function to start auto-scrolling
  const startAutoScroll = () => {
    scrollInterval.current = setInterval(() => {
      handleRightArrow();
    }, intervalTime);
  };

  // Function to stop auto-scrolling
  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  };

  // Function to reset auto-scrolling interval
  const resetAutoScroll = () => {
    stopAutoScroll();
    startAutoScroll();
  };

  // Function to extend interval time to 10 seconds
  const extendInterval = () => {
    setIntervalTime(10000); // 10 seconds
    resetAutoScroll();
    if (resetTimeout.current) {
      clearTimeout(resetTimeout.current);
    }
    resetTimeout.current = setTimeout(() => {
      setIntervalTime(6600); // back to 5 seconds
      resetAutoScroll();
    }, 10000);
  };

  // Scroll left function with infinite scroll
  const handleLeftArrow = useCallback(() => {
    if (ref.current) {
      const scrollAmount = -300; // Adjust the scroll amount as needed
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      if (ref.current.scrollLeft === 0) {
        ref.current.scroll({ left: ref.current.scrollWidth, behavior: "smooth" });
      }
    }
    extendInterval();
  }, []);

  // Scroll right function with infinite scroll
  const handleRightArrow = useCallback(() => {
    if (ref.current) {
      const scrollAmount = 300; // Adjust the scroll amount as needed
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      if (ref.current.scrollLeft + ref.current.clientWidth >= ref.current.scrollWidth) {
        ref.current.scroll({ left: 0, behavior: "smooth" });
      }
    }
    extendInterval();
  }, []);

  return (
    <>
      <h1 className="text-gray-900 font-bold self-center py-16 text-4xl">Testimonies</h1>
      <section id="testimonies" className="max-w-full w-full justify-center py-12 my-12 mb-36 self-center m-2 flex items-center bg-transparent rounded-box">
        <button
          onClick={handleLeftArrow}
          className="btn hover:bg-slate-400/30 bg-transparent border-none mr-3 text-2xl text-slate-950 shadow-none">
          {"❮" || "<"}
        </button>
        <div
          ref={ref}
          className="carousel carousel-center max-w-6xl overflow-x-auto space-x-4 bg-transparent rounded-box">
          {testimonies?.map((e: any, i) => {
            return (
              <div
                key={i}
                className="carousel-item card inline-block sm:max-w-xs overflow-hidden max-w-64  bg-slate-100 border border-slate-200">
                <Image
                  alt="sss"
                  width={1000}
                  height={1000}
                  src={e.picture.large}
                  className="rounded-t object-cover max-h-48 sm:max-h-56"
                />
                <div className="card-body text-gray-900 ">
                  <h2 className="card-title">
                    {e.name.first} {e.name.last}
                  </h2>
                  <p>
                    <i>"{e.testimonies}"</i>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleRightArrow}
          className="btn hover:bg-slate-400/30 bg-transparent border-none ml-3 text-2xl text-slate-950 shadow-none">
          {"❯" || ">"}
        </button>
      </section>
    </>
  );
}

export { Testimony };
