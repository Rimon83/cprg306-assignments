import StudentInfo from "./StudentInfo/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" flex flex-col gap-5 max-w-5xl w-full justify-between font-mono text-sm sm:flex-row">
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="flex flex-col">
          <StudentInfo />
          <Link href="/week2">Week 2 </Link>
          <Link href= "/week3">Week 3</Link>
          <Link href= "/week4">Week 4</Link>
          <Link href= "/week5">Week 5</Link>
        </div>
      </div>
    </main>
  );
}
