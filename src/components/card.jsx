const Card = ({ children }) => {
  return (
    <div className="bg-[black] w-[300px] h-[50vh] shadow-lg rounded-[20px] p-4">
      {children}
    </div>
  );
};

export default Card;
