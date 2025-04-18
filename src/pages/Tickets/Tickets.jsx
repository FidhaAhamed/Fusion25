import React from "react";
import Heading from "../../components/Heading";
import TicketsCard from "../../components/TicketsCard";
import RegBtn from "../../components/RegBtn";

export default function Tickets() {
  return (
    <section id="tickets">
      <div className="w-full bg-black py-12 px-4 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="gradient-circle absolute z-10  left-10"></div>
        <div className="gradient-circle absolute z-10  right-10"></div>
        <div className="gradient-circle absolute z-10 bottom-0 left-1/4"></div>

        <Heading heading="grab your tickets now" />

        <div className="z-30 w-full lg:w-3/5 md:h-[36rem]  px-4 sm:px-6 md:px-12 lg:px-20 py-4 bg-white bg-opacity-15 rounded-3xl flex flex-col items-center justify-center">
          {/* tickets container */}
          <div className=" mb-3 md:mb-8 md:h-[30rem] w-full flex items-center justify-between flex-col md:flex-row">
            <TicketsCard
              position={"side"}
              forWhom={"3 NON-IEEE MEMBERS"}
              price={"2697"}
            />
            <TicketsCard
              position={"center"}
              forWhom={"3 IEEE MEMBERS"}
              price={"2397"}
            />
            <TicketsCard
              position={"side"}
              forWhom={"3 SPS MEMBERS"}
              price={"2097"}
            />
          </div>
          {/* register button */}
          <div className="my-3 md:my-0 md:mb-5">
          <RegBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
