import React from "react";
import Loading from "./Loading";

const Button = ({
  variant = "primary",
  size = "medium",
  loading = false,
  children,
  text,
  ...props
}) => {
  const baseClasses =
    "rounded-md shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "text-white bg-blue-600 hover:bg-blue-700",
    secondary: "text-blue-600 bg-white hover:bg-gray-100",
  };

  const sizeClasses = {
    small: "text-sm px-3 py-1",
    medium: "text-md px-4 py-2",
    large: "text-lg px-5 py-3",
  };
  
  const loadingClasses = loading ? "opacity-50 cursor-not-allowed" : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${loadingClasses}`;

  return (
    <button className={classes} {...props}>
      {loading ? <Loading /> : children}
    </button>
  );
};

export default Button;
