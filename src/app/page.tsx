import { GetInsectButton } from "@/components/buttons/GetInsectButton";
import { Header } from "./Header";

const Home = async () => {
  return (
    <main className="flex flex-col items-center p-8 space-y-8">
      <Header />

      <GetInsectButton />
    </main>
  );
};

export default Home;
