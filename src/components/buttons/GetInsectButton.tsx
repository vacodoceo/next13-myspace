"use client";

import { getRandomInsect } from "@/actions/get-random-insect";

export const GetInsectButton = () => {
  const handleClick = async () => {
    const insect = await getRandomInsect();
    alert(`You received an ${insect}!`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-md bg-cyan-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
    >
      Get insect
    </button>
  );
};
