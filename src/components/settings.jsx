import React from "react";
import Button from "./button";
import Checkbox from "./checkbox";
import Slider from "./slider";
import PasswordStrength from "./strength";

const PasswordSettings = ({
  settings,
  changeSettings,
  generatePassword,
  calculatedPasswordStrength,
}) => {
  return (
    <div className="w-full bg-dark-grey p-4 sm:p-8 flex flex-col gap-8">
      <Slider
        id="Character Length"
        value={settings.length}
        setValue={changeSettings}
      />
      <div className="flex flex-col gap-4 sm:gap-5">
        <Checkbox
          id="useUppercase"
          label="Include Uppercase Letters"
          value={settings.useUppercase}
          setValue={changeSettings}
        />
        <Checkbox
          id="useLowercase"
          label="Include Lowercase Letters"
          value={settings.useLowercase}
          setValue={changeSettings}
        />
        <Checkbox
          id="useNumbers"
          label="Include Numbers"
          value={settings.useNumbers}
          setValue={changeSettings}
        />
        <Checkbox
          id="useSymbols"
          label="Include Symbols"
          value={settings.useSymbols}
          setValue={changeSettings}
        />
      </div>
      <PasswordStrength calculatedStrength={calculatedPasswordStrength} />

      <Button onClick={generatePassword}>Generate</Button>
    </div>
  );
};

export default PasswordSettings;
