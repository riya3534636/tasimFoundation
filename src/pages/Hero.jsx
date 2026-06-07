import React from "react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-150 bg-gradient-to-b from-[#FFE3D5] to-[#BF4408]">
      <section className="text-center mt-16 px-4">
        <h1 className="text-3xl md:text-5xl leading-tight font-medium text-black">
          Empowering Children for
          <br />
          Promising Futures
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-sm md:text-base text-gray-800">
          Cultivating Knowledge, Inspiring Confidence, and Equipping the Next
          Generation with Skills for a Brighter Tomorrow
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10">
          <button className="bg-[#a9440f]  text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#a9440f] transition">
            Contact Us
          </button>

          <button className="bg-white border-2 border-[#BF4408] text-[#c95c1b] px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#FFE3D5] transition">
            Our Projects
          </button>
        </div>

        {/* Image Row */}
        <div className="mt-16 pb-10 overflow-hidden">
          <div className="flex gap-4 md:gap-6 justify-center overflow-x-auto md:overflow-visible px-2 scrollbar-hide">
            {/* First Image - Half Visible */}
            <div className="overflow-hidden w-[120px] md:w-[150px] flex-shrink-0">
              <img
                src={image1}
                alt="Children learning"
                className="w-[280px] md:w-[362px] h-[200px] md:h-[280px] object-cover rounded-[20px] -translate-x-1/4"
              />
            </div>

            {/* Middle Images */}
            {[image2, image3, image4].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-[280px] md:w-[362px] h-[200px] md:h-[280px] object-cover rounded-[20px] flex-shrink-0"
              />
            ))}

            {/* Last Image - Half Visible */}
            <div className="overflow-hidden w-[120px] md:w-[150px] flex-shrink-0">
              <img
                src={image5}
                alt="Children activities"
                className="w-[300px] md:w-[362px] h-[200px] md:h-[280px] object-cover rounded-[20px] translate-x-1/4"
              />
            </div>
          </div>
        </div>
        
      </section>
      </div>
    </>
  );
};

export default Hero;
