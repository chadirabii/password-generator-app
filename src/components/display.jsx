import { useState } from "react";
import IconCopy from "../assets/icon-copy";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordDisplay = ({ password }) => {
  const [copied, setCopied] = useState(false);
  const isPasswordNotEmpty = password !== "";

  const savePasswordToClipboard = () => {
    if (password.length === 0) return;

    navigator.clipboard.writeText(password);

    toast.success("Password Copied ✅", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setCopied(false);
  };

  return (
    <div
      className={`text-[#E7E6EB]  px-4 sm:px-8 py-4 sm:py-5 bg-dark-grey w-full text-heading-M sm:text-heading-L relative z-10`}
    >
      <span
        className={`${isPasswordNotEmpty ? "" : "opacity-25 text-[#E7E6EB]"}`}
      >
        {isPasswordNotEmpty ? password : "P4$5W0rD!"}
      </span>
      <div
        className={`flex gap-2 ${
          password.length < 18 ? "gap-4" : "gap-2"
        } items-center text-neon-green absolute right-4 sm:right-8 top-[1.375rem] sm:top-7`}
      >
        <IconCopy
          className="text-neon-green hover:text-almost-white"
          onClick={savePasswordToClipboard}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        className="custom-toast"
      />
    </div>
  );
};

export default PasswordDisplay;
