import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  name: string | null;
  image: string | null;
}

export default function UserCard({ id, name, image }: Props) {
  return (
    <div className="flex space-y-4 flex-col w-60 bg-cyan-950 p-4 items-center">
      <Image
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
        className=""
        width={208}
        height={208}
      />
      <div className="text-center">
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
      </div>
    </div>
  );
}
