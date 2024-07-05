import AllPunksCard from "@/components/AllPunksCard";
import PunksCard from "@/components/PunksCard";
import SpotifyWidget from "@/components/SpotifyWidget";
import ToastButton from "@/components/ToastButton";
import Todos from "@/components/Todos";
import ZustandCounterServer from "@/components/ZustandCounterServer";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto bg-scroll-gradient grayscale hover:grayscale-0 bg-background">
      {/* <div className="sticky top-[-16px] z-10 bg-background ">
        <h1 className="text-7xl font-extrabold border-b-4 border-primary flex items-center justify-between ">
          <div>
            <span className="text-red-500">cherry</span>dub
          </div>

          <div className="">
            <ToastButton>🍺</ToastButton>
          </div>
        </h1>
      </div> */}
      <h1 className="text-2xl text-primary/50 flex justify-end pb-12">
        my little corner of the web
        <Globe size={16} />
      </h1>

      <div className="flex-center-col m-4 gap-20">
        <SpotifyWidget />
        <PunksCard />{" "}
        <span className="bg-gray-100">
          A great way to start any project with Nextjs standards
        </span>
        <ZustandCounterServer />
        <Todos />
        <AllPunksCard />
        <br />
      </div>
    </main>
  );
}
