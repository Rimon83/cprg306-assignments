
import Link from "next/link";
const Page = () => {

    return (
    
        <div className="flex flex-col gap-4 justify-center items-center w-1/2 mx-auto p-20 border-2 dark:border-white border-gray-500 rounded-lg mt-12">
          <h1 className="text-4xl">Shopping list</h1>
          <Link href="/week8/shopping-list" className="p-2 bg-blue-500 rounded-lg hover:bg-blue-400">You have to sign in</Link>

        </div>
      
    );
};

export default Page;
