import ItemList from "./item-list.js";

export default function Week3() {
  return (
    <article className="min-h-screen bg-slate-400 p-24 flex flex-col gap-6">
      <h1 className="text-4xl font-black">Shopping List</h1>
      <ItemList />
    </article>
  );
}
