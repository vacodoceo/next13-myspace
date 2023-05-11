"use client";

import { getRandomInsect } from "@/actions/get-random-insect";

const Home = async () => {
  const handleClick = async () => {
    const insect = await getRandomInsect();
    alert(`You received an ${insect}!`);
  };

  return (
    <main className="flex flex-col items-center p-8 space-y-8">
      <h1>Holita</h1>

      <button
        type="button"
        onClick={handleClick}
        className="rounded-md bg-cyan-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
      >
        Get insect
      </button>
    </main>
  );
};

export default Home;
