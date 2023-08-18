import { useEffect, useState } from "react";
import IconCopy from "../../assets/icon-copy";

const PasswordDisplay = ({ password }) => {
  const [copied, setCopied] = useState(false);
  const isPasswordNotEmpty = password !== "";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  const savePasswordToClipboard = () => {
    if (password.length === 0) return setCopied(false);
    setCopied(true);
    navigator.clipboard.writeText(password);
  };

  return (
    <div
      className={`text-almost-white  px-4 sm:px-8 py-4 sm:py-5 bg-dark-grey w-full text-heading-M sm:text-heading-L relative z-10`}
    >
      <span className={`${isPasswordNotEmpty ? "" : "opacity-25"}`}>
        {isPasswordNotEmpty ? password : "P4$5W0rD!"}
      </span>
      <div
        className={`flex gap-2 ${
          password.length < 18 ? "gap-4" : "gap-2"
        } items-center text-neon-green absolute right-4 sm:right-8 top-[1.375rem] sm:top-7`}
      >
        <span className="text-base sm:text-body">{copied && "COPIED"}</span>
        <IconCopy
          className="text-neon-green hover:text-almost-white"
          onClick={savePasswordToClipboard}
        />
      </div>
    </div>
  );
};

export default PasswordDisplay;
