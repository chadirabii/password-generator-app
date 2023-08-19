const PasswordStrength = ({ selectedCount }) => {
  const colors = {
    0: { text: "TOO WEAK!", textColor: "text-red" },
    1: { bg: "bg-red", text: "TOO WEAK!", textColor: "text-red" },
    2: { bg: "bg-orange", text: "WEAK", textColor: "text-orange" },
    3: { bg: "bg-yellow", text: "MEDIUM", textColor: "text-yellow" },
    4: { bg: "bg-neon-green", text: "STRONG", textColor: "text-neon-green" },
  };

  const calculatedStrength = selectedCount <= 4 ? selectedCount : 0;

  const rectangles = [];
  for (let i = 0; i < 4; i++) {
    rectangles.push(
      <div
        key={i}
        className={`h-7 w-[10px] my-[0.875rem] sm:my-[1.375rem]
        ${i >= calculatedStrength ? "border-almost-white border-2" : ""}
        ${i < calculatedStrength ? colors[calculatedStrength].bg : ""}
      `}
      ></div>
    );
  }

  return (
    <div className="bg-[#191820] px-4 sm:px-8  flex justify-between items-center">
      <span className={"text-heading-M sm:text-body text-grey "}>STRENGTH</span>
      <div className="flex gap-2 items-center">
        <span
          className={`mr-2 text-2xl sm:text-heading-M ${
            calculatedStrength >= 0 ? colors[calculatedStrength].textColor : ""
          }`}
        >
          {colors[calculatedStrength].text}
        </span>
        {rectangles}
      </div>
    </div>
  );
};

export default PasswordStrength;
