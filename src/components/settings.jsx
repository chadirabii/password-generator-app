import Button from "./button";
import Checkbox from "./checkbox";
import PasswordStrength from "./strength";
import Slider from "./slider";

const PasswordSettings = ({ settings, changeSettings, generatePassword }) => {
  const checkedCount =
    (settings.useUppercase ? 1 : 0) +
    (settings.useLowercase ? 1 : 0) +
    (settings.useNumbers ? 1 : 0) +
    (settings.useSymbols ? 1 : 0);

  let calculatedPasswordStrength = 0;

  if (checkedCount >= 4) {
    calculatedPasswordStrength = 4; // Strong
  } else if (checkedCount >= 3) {
    calculatedPasswordStrength = 3; // Medium
  } else if (checkedCount >= 2) {
    calculatedPasswordStrength = 2; // Weak
  } else {
    calculatedPasswordStrength = 1; // Too weak
  }

  // Disable the button if no checkbox is checked
  const isGenerateButtonDisabled = settings.length === 0 || checkedCount === 0;

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

      <PasswordStrength selectedCount={checkedCount} />

      <Button onClick={generatePassword} isDisabled={isGenerateButtonDisabled}>
        Generate
      </Button>
    </div>
  );
};

export default PasswordSettings;
