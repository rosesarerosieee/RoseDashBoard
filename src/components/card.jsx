const Card = ({ children, isDarkMode }) => {
  return (
    <div
      className={`w-[300px] h-[50vh] shadow-lg rounded-[20px] p-4 animate-slide-in-left ${
        isDarkMode
          ? "bg-[lightpink] text-[black]"
          : "bg-[black] text-[lightpink]"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
