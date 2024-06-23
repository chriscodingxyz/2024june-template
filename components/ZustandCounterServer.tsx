import { getServerState } from "@/store/store";
import ZustandCounterClient from "@/components/ZustandCounterClient";
import Image from "next/image";

export default function ZustandCounterServer() {
  const { count } = getServerState();

  return (
    <main className="px-2 border-4 border-primary flex-center-col mx-auto shadow-[8px_8px_0px_0px_#9f9f9f] border-dashed hover:bg-primary/5">
      <h1 className="text-xl font-bold flex-center">
        <Image src="/zustandlogo.png" alt="punk1534" width={267} height={211} />
        <span className="pl-4">
          Zustand is a great Global Management solution, an alternative to Redux
        </span>
      </h1>
      <ZustandCounterClient />
    </main>
  );
}
