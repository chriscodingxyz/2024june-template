import { getServerState } from "@/store/store";
import ZustandCounterClient from "@/components/ZustandCounterClient";
import Image from "next/image";
import { Button } from "./ui/button";

export default function ZustandCounterServer() {
  const { count } = getServerState();

  return (
    <main className="relative px-2 border-4 border-primary flex-center-col mx-auto shadow-[8px_8px_0px_0px_#9f9f9f] border-dashed bg-orange-300 hover:border-solid hover:opacity-85 group">
      <h1 className="text-xl font-bold flex-center">
        <Image src="/zustandlogo.png" alt="punk1534" width={267} height={211} />
        <span className="pl-4">
          Zustand is a great 🌐Global State Management solution. An alternative
          to 💩Redux and Context API⚛
        </span>
      </h1>
      <ZustandCounterClient />
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Button variant={"ringHover"}>Learn More</Button>
      </div>
    </main>
  );
}
