const Card = ({ children }) => {
  return (
    <div className="bg-[blue] w-[300px] h-[70vh] rounded-[20px] shadow-lg p4">
      {children}
    </div>
  );
};

export default Card;
