import React from "react";

const FullWidthImageSection: React.FC = () => {
  return (
    <section className="w-screen">
      <img
        src="/MobileMedicalUnit/What-is-a-Mobile-Medical-Unit.png"
        alt="What is a Mobile Medical Unit (MMU)?"
        className="w-screen h-auto object-cover"
      />
    </section>
  );
};

export default FullWidthImageSection;
