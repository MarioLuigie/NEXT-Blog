import Image from "next/image";

export default function ProfileLabel({ user }: { user: any }) {

  return (
    <div className="flex-center gap-3">
    {user?.picture ? (
      <Image
        src={user?.picture}
        alt="Avatar"
        width={45}
        height={45}
        className="rounded-full"
      />
    ) : (
      <div className="w-[40px] aspect-square flex-center rounded-full bg-zinc-200 text-zinc-800 text-md">
        {user?.given_name?.charAt(0)}
      </div>
    )}
    <div className="flex-center gap-1">
      <p>{user?.given_name}</p>
      <p>{user?.family_name}</p>
    </div>
  </div>
  )
}