export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    onSelect(name);
  };

  return (
    <div
      className=" sm:w-[80%] p-2 border-2 text-black border-blue-200 rounded hover:bg-slate-600 hover:text-white cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="sm:text-2xl text-lg">{name}</h1>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
