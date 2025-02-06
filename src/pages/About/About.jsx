import Heading from "../../components/Heading"
import './../../index.css'

const About = () => {
  return (
    <section id="about">
    <div className="bg-black text-white p-8 md:p-32 text-center flex flex-col justify-center relative overflow-hidden">
      <div className="gradient-circle absolute top-10 left-20"></div>
      <div className="gradient-circle absolute top-1/4 right-10"></div>
      <div className="gradient-circle absolute bottom-10 left-1/3"></div>

      <Heading heading="about fusion"/>

      <p className="about my-8 text-base md:text-lg leading-relaxed font-ClashDisplay text-center max-w-xs md:max-w-3xl mx-auto mb-8 px-6 md:px-0">
      FUSION'25 is a functional 3-day event held by IEEE SPS SBC MACE in collaboration with IEEE SPS Kerala Chapter. 
      The event commences on 21st and continues through 22nd to culminate on the 23rd February 2025. The workshops and talk sessions 
      incorporated into the event are sure to spark passion for Signal Processing in minds of the attendees. The practical experiences 
      provided will also make one confident in their own talents. The event also includes an ideathon to challenge and urge the participants 
      to find innovative solutions to delicate yet perilous problems. To not get drowned out by all the technical traits, FUSION also conducts 
      interative games for the thrill of it and cultural night to let loose. The most pivotal take away from the event is the invaluable 
      connections made during the undertaking, which will forever be an asset in your life. So come and be a part of this extraordinary 
      event to experience and learn something new and enthralling.
      </p>

      <img
        src="/Images/logo.png"
        alt="Fusion Logo"
        className="mt-8 w-64 h-auto mx-auto block"
      />
    </div>
    </section>
  );
};

export default About;