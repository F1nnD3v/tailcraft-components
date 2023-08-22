const Loading = ({
  type = "spinner", // "spinner", "dots", "bars"
  text = "Loading...",
  color = "black",
  size = "medium", // "small", "medium", "large"
  overlay = false,
  ...props
}) => {
  // Style classes for different types of animations
  const animationClasses = {
    spinner: "animate-spin border-2 border-t-transparent rounded-full",
    dots: "animate-pulse",
    bars: "animate-bounce",
  };

  // Style classes for different sizes
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  };

  // Overlay styles
  const overlayStyles = overlay
    ? "fixed inset-0 flex items-center justify-center bg-opacity-50 bg-white z-50"
    : "";

  // Combined classes
  const classes = `${animationClasses[type]} ${sizeClasses[size]} border-${color} ${overlayStyles}`;

  return (
    <div
      className={
        overlay
          ? "fixed inset-0 flex items-center justify-center bg-opacity-50 bg-white z-50"
          : ""
      }
    >
      <div className={classes}></div>
      {text && <p className="text-center mt-2">{text}</p>}
    </div>
  );
};

export default Loading;
