import React from "react";
import doctorImage from "../../../public/MobileMedicalUnit/ExperienceSection.png";

const ExperienceSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto bg-[#176EC6] rounded-xl p-6 md:p-10 flex flex-col lg:flex-row items-center lg:items-center text-white relative min-h-[24rem] gap-y-6 lg:gap-x-4">
      
      {/* Text Section */}
      <div className="lg:w-7/12 mb-6 lg:mb-0 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Experience &amp; Reach
        </h2>
        <p className="text-lg md:text-xl">
          Atharv Healthcare has experience supporting{" "}
          <span className="font-semibold">
            structured healthcare <br />programs across India
          </span>, 
          operating in urban, semi-urban, and remote <br />regions.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-5/12 flex justify-end relative">
        <img
          src={doctorImage}
          alt="Healthcare professional"
          className="w-72 h-72 md:w-[22rem] md:h-[18rem] object-contain"
        />
      </div>

    </section>
  );
};

export default ExperienceSection;
