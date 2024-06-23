import AllPunksCard from "@/components/AllPunksCard";
import PunksCard from "@/components/PunksCard";
import ToastButton from "@/components/ToastButton";
import Todos from "@/components/Todos";
import ZustandCounterServer from "@/components/ZustandCounterServer";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto bg-background/90">
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
      <h1 className="text-2xl text-right text-primary/50">
        stop making templates
      </h1>
      <div className="flex-center-col m-4 gap-12">
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
