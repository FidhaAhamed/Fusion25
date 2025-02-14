import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../../components/Heading';

const galleryImages = [
  { src: '/Images/Gallery/_MG_9645.JPG', width: 400, height: 600 },
  { src: '/Images/Gallery/_MG_9648.JPG', width: 600, height: 400 },
  { src: '/Images/Gallery/IMG_9257.JPG', width: 500, height: 500 },
  { src: '/Images/Gallery/_MG_8474.JPG', width: 700, height: 400 },
  { src: '/Images/Gallery/_MG_9380.JPG', width: 400, height: 800 },
  { src: '/Images/Gallery/IMG_8464.JPG', width: 600, height: 600 },
  { src: '/Images/Gallery/IMG_8547.JPG', width: 500, height: 700 },
  { src: '/Images/Gallery/IMG_8613.JPG', width: 800, height: 400 },
  { src: '/Images/Gallery/IMG_8977.JPG', width: 400, height: 500 },
  { src: '/Images/Gallery/IMG_9284.JPG', width: 400, height: 300 },
  { src: '/Images/Gallery/IMG_0252.JPG', width: 400, height: 300 },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Gallery = () => {
  return (
    <section id="gallery" className="relative overflow-hidden">
      <div className="w-full bg-black py-12 px-4 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="gradient-circle absolute top-10 left-20"></div>
        <div className="gradient-circle absolute top-1/4 right-10"></div>
        <div className="gradient-circle absolute bottom-10 left-1/3"></div>

        <Heading heading="Gallery" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mt-12 p-6 border-2 border-white/20 rounded-lg backdrop-blur-sm"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              className={`relative overflow-hidden rounded-lg shadow-2xl cursor-pointer group`}
              style={{
                gridColumn: `span ${image.width > image.height ? 1 : 1}`,
                gridRow: `span ${image.height > image.width ? 2 : 1}`, 
              }}
            >
              <img
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;