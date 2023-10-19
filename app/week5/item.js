export default function Item({ name, quantity, category }) {
  return (
    <div className=" sm:w-[40%] p-2 border-2 border-blue-200 rounded hover:bg-slate-600 hover:text-white">
      <h1 className="sm:text-2xl text-lg">{name}</h1>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
