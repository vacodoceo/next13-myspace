import { getServerSession } from "next-auth";

const Home = async () => {
  const session = await getServerSession();

  console.log({ session });

  if (!session) {
    return <p>You must be signed in ...</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Holita
    </main>
  );
};

export default Home;
