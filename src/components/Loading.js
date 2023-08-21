const Loading = ({ text = "Default loading text", ...props }) => {
  return (
    <div>
      <div className="animate-spin w-5 h-5 border-2 border-black rounded-full border-t-transparent m-auto"></div>
      <p className="text-center mt-2">{text}</p>
    </div>
  );
};

export default Loading;
