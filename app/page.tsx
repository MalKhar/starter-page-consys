"use client";
// import uniao from "@/app/components/uniao/actions"
import { formatUniao } from "@/app/components/uniao/actions";
import Background from "./components/background/background";
import Timer from "./components/timer/timer";
import Input from "./components/input/input";
import Favorites from "./components/favorites/favorites";
import InputBase from "./components/input-base/input-base";
import Image from "next/image";

export default function Home() {
  const data = formatUniao();

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Background />
          <div>
            <Timer />
            <Input />
            <div className="mt-4">
              <InputBase />
            </div>
            <div className="mt-40">
              <div className=" justify-items-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkSRP_KvLuQtvHaQaEhr6ll-fWNBDwb-Pbw&s"
                  alt="Logo"
                  width={200}
                  height={100}
                />
              </div>
              <Favorites />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
function useQuery(arg0: {
  queryKey: (() => Promise<string[][]>)[];
  queryFn: () => Promise<string[][]>;
}): { data: any; error: any } {
  throw new Error("Function not implemented.");
}
