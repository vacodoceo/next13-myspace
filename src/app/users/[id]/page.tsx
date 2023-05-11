import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
};

const UserProfile = async ({ params }: Props) => {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl">{name}</h1>

      <Image
        width={300}
        height={300}
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
      />

      <h3>Bio</h3>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;
