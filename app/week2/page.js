import StudentInfo from "../StudentInfo/page";

export default function Week2() {
  return (
    <article className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-5 z-10 max-w-5xl w-full justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl">My Shopping List</h1>
        <div>
          <StudentInfo />
        </div>
      </div>
    </article>
  );
}
