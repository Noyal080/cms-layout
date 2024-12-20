import React, { useRef, useEffect } from "react";
import { Typography } from "@mui/material";
import { BrandSliderProps } from "./type";

const BrandSlider: React.FC<BrandSliderProps> = ({
  title = "Trusted by",
  brands,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const createSliderContent = () => {
      let content = "";
      brands.forEach((brand) => {
        content += `
          <div class="flex flex-col items-center justify-center px-8 min-w-[150px]">
            ${
              brand.logo
                ? `<img src="${brand.logo}" alt="${brand.name}" class="h-12 w-auto mb-2 object-contain transition-transform duration-500 hover:scale-105" />`
                : ""
            }
            <div class="text-gray-400 text-sm text-center">${brand.name}</div>
          </div>
        `;
      });
      return content;
    };

    const content = createSliderContent();
    slider.innerHTML = content + content; // Duplicate content to ensure seamless loop

    // Calculate the animation duration based on the number of brands
    const animationDuration = brands.length * 2; // 2 seconds per brand, adjust as needed
    slider.style.animationDuration = `${animationDuration}s`;

    // Check if we need to add more content for a seamless loop
    const checkWidth = () => {
      if (slider.scrollWidth <= slider.clientWidth * 2) {
        slider.innerHTML += content;
        checkWidth(); // Recursively check until we have enough content
      }
    };
    checkWidth();
  }, [brands]);

  return (
    <div className="relative w-full bg-gray-900 py-8 overflow-hidden">
      <Typography
        variant="h5"
        className="text-center text-white font-bold pb-[20px]"
      >
        {title}
      </Typography>

      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex animate-marquee"
          style={{
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      </div>
    </div>
  );
};

export default BrandSlider;
