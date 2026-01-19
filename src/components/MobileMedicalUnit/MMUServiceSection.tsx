import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    image: '/MobileMedicalUnit/Service-1.png',
    title: "Vaccination and medicine distribution",
    subtitle: "(where applicable)",
  },
  {
    image:'/MobileMedicalUnit/Service-1.png',
    title: "Maternal and child healthcare",
    subtitle: "(prenatal and postnatal care)",
  },
  {
    image: '/MobileMedicalUnit/Service-1.png',
    title: "General health checkups",
    subtitle: "(screening and diagnostics)",
  },
  {
    image: '/MobileMedicalUnit/Service-1.png',
    title: "Mobile health outreach",
    subtitle: "(rural and remote areas)",
  },
];

const MMUServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % services.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight" style={{ color: "#1566B7" }}>
              <span className="text-primary">Our Mobile Medical</span>
              <br />
              <span className="text-secondary">Unit Services</span>
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-body text-base md:text-lg">
              Atharv Healthcare delivers{" "}
              <span className="text-emphasis">
                MMU services that are configurable based on program requirements,
              </span>{" "}
              geography, and target population. Each MMU program is planned with a
              focus on{" "}
              <span className="text-emphasis">
                operational feasibility, compliance, and measurable outreach,
              </span>{" "}
              rather than fixed, one-size-fits-all offerings.
            </p>
          </div>
        </div>

        {/* Subheading */}
        <p className="text-foreground font-medium mb-8 text-base md:text-lg ">
          Our MMU programs are designed to include:
        </p>

        {/* Image Carousel */}
        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            {visibleIndices.map((index, position) => {
              const isFirst = position === 0;

              return (
                <div
                  key={`${index}-${position}`}
                  className={`flex-shrink-0 rounded-xl transition-all duration-300 hover:shadow-lg
                    ${isFirst ? "border border-border bg-card p-4 w-2/5 md:w-2/5" : "w-1/3 md:w-1/3"}`}
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-lg h-56 md:h-64">
                    <img
                      src={services[index].image}
                      alt={services[index].title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Text below image for first item */}
                  {isFirst && (
                    <div className="mt-4">
                      <h3 className="text-foreground font-medium text-base md:text-lg">
                        {services[index].title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base mt-1">
                        {services[index].subtitle}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              className="h-12 w-12 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MMUServicesSection;
