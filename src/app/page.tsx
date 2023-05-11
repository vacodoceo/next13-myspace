"use client";

import { getRandomInsect } from "@/actions/get-random-insect";

const Home = async () => {
  const handleClick = async () => {
    const insect = await getRandomInsect();
    alert(`You received an ${insect}!`);
  };

  return (
    <main className="flex flex-col items-center justify-between p-8">
      <h1>Holita</h1>

      <button onClick={handleClick}>Get insect</button>
    </main>
  );
};

export default Home;
