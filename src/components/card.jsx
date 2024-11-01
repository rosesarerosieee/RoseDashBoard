const Card = ({ children }) => {
  return (
    <div className="bg-[khaki] w-[300px] h-[70vh] shadow-lg rounded-[20px] p-4">
      {children}
    </div>
  );
};

export default Card;
