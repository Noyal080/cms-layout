import React from "react";

interface Brand {
  name: string;
  logo: string;
}

interface InfiniteSliderProps {
  title?: string;
  brands: Brand[];
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  title = "Trusted Brands",
  brands,
}) => {
  return (
    <div className="relative m-auto w-[500px] overflow-hidden bg-white">
      {/* Title */}
      <div className="text-center text-xl font-bold py-4">{title}</div>

      {/* Slider Content */}
      <div className="relative">
        {/* Gradient Effect */}
        <div className="before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(250px*10)]">
            {/* Loop over the brands and display their logos */}
            {brands.map((brand, index) => (
              <div
                className="slide flex w-[125px] items-center justify-center"
                key={index}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate the brands for infinite scroll */}
            {brands.map((brand, index) => (
              <div
                className="slide flex w-[125px] items-center justify-center"
                key={index + brands.length}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
