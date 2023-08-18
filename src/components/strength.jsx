import React from "react";

const PasswordStrength = ({ calculatedStrength }) => {
  const color = "bg-red";
  const colors = {
    0: { color: "transparent", text: "" },
    1: { color: "bg-red", text: "TOO WEAK!" },
    2: { color: "bg-orange", text: "WEAK" },
    3: { color: "bg-yellow", text: "MEDIUM" },
    4: { color: "bg-neon-green", text: "STRONG" },
  };
  const rectangles = [];
  for (let i = 0; i < 4; i++) {
    rectangles.push(
      <div
        key={i} // Add a unique key prop here
        className={`h-7 w-[10px] my-[0.875rem] sm:my-[1.375rem]
        ${i >= calculatedStrength ? "border-almost-white border-2" : ""}
        ${i < calculatedStrength ? colors[calculatedStrength].color : ""}
    `}
      ></div>
    );
  }

  return (
    <div className="bg-[#191820] px-4 sm:px-8  flex justify-between items-center">
      <span className="text-base sm:text-body text-grey">STRENGTH</span>
      <div className="flex gap-2 items-center">
        <span className="mr-2 text-body sm:text-heading-M text-green-400">
          {colors[calculatedStrength].text}
        </span>
        {rectangles}
      </div>
    </div>
  );
};

export default PasswordStrength;
