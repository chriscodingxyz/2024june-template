import { getServerState } from "@/store/store";
import ZustandCounterClient from "@/components/ZustandCounterClient";

export default function ZustandCounterServer() {
  const { count } = getServerState();

  return (
    <main className="border-4 border-yellow-500">
      <h1>Server-side count: {count} (Render value)</h1>
      <ZustandCounterClient />
    </main>
  );
}
