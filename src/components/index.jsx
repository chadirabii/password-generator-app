import { useState } from "react";
import PasswordSettings from "./password-settings";
import PasswordDisplay from "./password-display";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState({
    length: 15,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true,
  });

  const calculatePasswordStrength = () => {
    if (password === "") return 0;
    const patterns = ["[A-Z]", "[a-z]", "[0-9]", "[^A-Za-z0-9]"];
    const hasLength = (length) => `(?=.{${length},})`;
    const strengthLevels = [4, 3, 2, 1];

    for (let i = 0; i < strengthLevels.length; i++) {
      const strength = strengthLevels[i];
      const regexPattern = patterns
        .map(
          (pattern) =>
            pattern + hasLength(strength >= 3 ? 15 : strength === 2 ? 8 : 5)
        )
        .join("");

      if (password.match(regexPattern)) {
        return strength;
      }
    }

    return 1;
  };

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
        calculatedPasswordStrength={calculatePasswordStrength()}
      />
    </div>
  );
};

export default PasswordGenerator;
