import React, { useState } from "react";
import Button from "./button";
import PasswordSettings from "./settings";
import PasswordDisplay from "./display";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState({
    length: 15,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true,
  });

  const generatePassword = () => {
    const charSets = {
      useUppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      useLowercase: "abcdefghijklmnopqrstuvwxyz",
      useNumbers: "0123456789",
      useSymbols: "!()-.?[]`~;@#$%^&*+=",
    };

    let charSet = "";
    for (const set in charSets) {
      if (settings[set]) {
        charSet += charSets[set];
      }
    }

    let password = "";
    for (let i = 0; i < settings.length; i++) {
      let char = charSet[Math.floor(Math.random() * charSet.length)];

      if (password.length === 0) {
        while (char === "." || char === "-") {
          char = charSet[Math.floor(Math.random() * charSet.length)];
        }
      }

      password += char;
    }

    setPassword(password);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 min-h-screen px-4 sm:w-[35.75rem]">
      <h1 className="text-title text-center text-grey sm:text-heading-M sm:mb-2">
        Password Generator
      </h1>
      <PasswordDisplay password={password} />
      <PasswordSettings
        settings={settings}
        changeSettings={setSettings}
        generatePassword={generatePassword}
      />
    </div>
  );
};

export default PasswordGenerator;
