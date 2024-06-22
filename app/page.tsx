import ToastButton from "@/components/ToastButton";
import Todos from "@/components/Todos";
import ZustandCounterServer from "@/components/ZustandCounterServer";

export default function Home() {
  return (
    <main className="">
      <p>
        welcome.. <ToastButton />
      </p>
      <br />
      <ZustandCounterServer />
      <Todos />
    </main>
  );
}
