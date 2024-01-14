const Card = ({ children, addClass }) => {
  return (
    <div
      className={`mx-2 flex flex-col h-full w-full rounded-md border border-gray-300 p-6 shadow ${addClass}`}
    >
      {children}
    </div>
  );
};

export default Card;
