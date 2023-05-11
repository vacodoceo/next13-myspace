import { GetInsectButton } from "@/components/buttons/GetInsectButton";

const Home = async () => {
  return (
    <main className="flex flex-col items-center p-8 space-y-8">
      <h1>Holita</h1>

      <GetInsectButton />
    </main>
  );
};

export default Home;
