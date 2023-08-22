import { useState } from "react";

const Switch = ({
  textEnabled = "I'm enabled",
  textDisabled = "I'm disabled",
  enabled = false,
  primaryColor = "blue",
  secondaryColor = "white",
}) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const primaryClass = primaryColor === "blue" ? "bg-blue-500" : "bg-custom-primary";
  const secondaryClass = secondaryColor === "white" ? "bg-white" : "bg-custom-secondary";

  const onChange = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div
      className={`relative ${primaryClass} h-7 w-36 text-${secondaryColor} text-center rounded-full p-1 cursor-pointer transition-all duration-300`}
      onClick={onChange}
    >
      <div
        className={`absolute left-1 top-1 ${secondaryClass} w-5 h-5 rounded-full my-auto transition-all duration-300 transform ${isEnabled ? "translate-x-28" : ""}`}
      ></div>
      <div className="flex-1 text-center absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">{isEnabled ? textEnabled : textDisabled}</div>
    </div>
  );
};

export default Switch;
