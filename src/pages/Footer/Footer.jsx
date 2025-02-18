import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const iconSize = 24;

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/ieeemace/mycompany/" },
    { icon: FaXTwitter, href: "https://twitter.com/ieeemace" },
    { icon: FaInstagram, href: "https://www.instagram.com/ieeemace/" },
    { icon: FaFacebook, href: "https://www.facebook.com/ieeemace/" },
  ];

  const contacts = [
    { name: "Naveen Prasad", number: "+919188313552" },
    { name: "Ameena R", number: "+918138997096" },
  ];

  return (
    <footer className="relative w-full pt-8 pb-6 bg-black overflow-hidden">
      {/* Blurred Circles */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10">
        <div className="gradient-circle absolute top-10 left-20 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>
        <div className="gradient-circle absolute top-1/3 right-10 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
        <div className="gradient-circle absolute bottom-10 left-1/3 w-36 h-36 bg-pink-600 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container">
        {/* Flex container for map and details */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 px-4 md:px-8 lg:px-16 xl:px-32">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-lg">
              <h3 className="font-RoverExplore text-white text-2xl mb-4 tracking-wide uppercase text-center lg:text-left">
                LOCATION
              </h3>
              <div className="map-container rounded-lg overflow-hidden shadow-2xl" style={{ position: 'relative', paddingTop: '50%', minHeight: '200px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5500639865463!2d76.6193309!3d10.053936999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e6154a2133e5%3A0x2c26b2d532bb30ea!2sMar%20Athanasius%20College%20of%20Engineering%20-%20Kothamangalam!5e0!3m2!1sen!2sin!4v1718273487535!5m2!1sen!2sin"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-lg px-4 sm:px-8 lg:px-12 xl:pr-32">
              {/* Connect Us Section */}
              <h3 className="font-RoverExplore text-white text-2xl mb-4 tracking-wide uppercase text-center lg:text-left">
                CONNECT US
              </h3>
              <div className="flex flex-col items-center lg:items-start space-y-3 mb-8">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/${contact.number.replace("+", "")}`}
                    className="flex items-center gap-3 text-white hover:text-green-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp size={iconSize} className="flex-shrink-0" />
                    <span className="font-ClashDisplay text-lg font-semibold">{contact.name}</span>
                  </a>
                ))}
              </div>

              {/* Follow Us Section */}
              <h3 className="font-RoverExplore text-white text-2xl mb-4 tracking-wide uppercase text-center lg:text-left">
                FOLLOW US ON
              </h3>
              <div className="flex justify-center lg:justify-start gap-6 mb-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon size={iconSize} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-purple-400 pt-6 px-4">
          <p className="font-ClashDisplay text-white text-sm">
            2025 &copy;&nbsp;<span className="font-bold">FUSION</span>. All Rights Reserved. 
            <span className="block sm:inline sm:before:content-['\00a0']">Developed By FUSION Web Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;