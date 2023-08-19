import ArrowRight from "../assets/icon-arrow-right";

const Button = ({ children, onClick }) => {
  return (
    <button
      disabled={children === "Generating..."}
      onClick={onClick}
      className="bg-neon-green text-dark-grey text-base sm:text-body mt-[-1rem] sm:mt-0 py-[1.125rem] sm:py-5 w-full flex justify-center items-center gap-4 border-2 box-border border-dark-grey hover:bg-dark-grey hover:text-neon-green hover:border-neon-green"
    >
      <span>{children.toUpperCase()}</span>
      <ArrowRight className="text-inherit" />
    </button>
  );
};

export default Button;
