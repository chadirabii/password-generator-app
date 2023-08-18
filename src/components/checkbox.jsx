import { Settings } from "../password-generator";

const Checkbox = ({ id, label, value, setValue }) => {
  return (
    <div className="flex gap-5 sm:gap-6 items-center">
      <input
        className="checkbox"
        type="checkbox"
        id={id}
        checked={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [id]: e.target.checked }))
        }
      />
      <label className="text-base sm:text-body" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
