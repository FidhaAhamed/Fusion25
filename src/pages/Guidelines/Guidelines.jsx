import React from "react";
import Heading from "../../components/Heading";

export default function Guidelines() {
  return (
    <section id="guidelines"className="relative z-20">
        
      <div className="w-full bg-black text-white py-12 px-4 relative overflow-hidden flex flex-col items-center justify-center">
      
       <div className="gradient-circle absolute z-10 left-10"></div>
        <div className="gradient-circle absolute z-10 right-10"></div>
        <div className="gradient-circle absolute z-10 bottom-0 left-1/4"></div>

        <div className="z-50">
  <Heading heading="GUIDELINES FOR PARTICIPANTS" />
</div>


        <div className="z-30 w-full lg:w-3/5 px-6 py-8 bg-white bg-opacity-15 rounded-3xl flex flex-col items-center justify-center text-left">
          <ul className="list-disc text-base md:text-lg leading-relaxed font-ClashDisplay max-w-xl mx-auto space-y-4 pl-5">
            <li>Laptops are required for workshops.</li>
            <li>Participants must carry a valid college ID for verification.</li>
            <li>Prior registration is mandatory for all events.</li>
            <li>Punctuality is expected for all sessions and activities.</li>
            <li>Attendees are responsible for their personal belongings.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
