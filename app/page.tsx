"use client";

import ToastButton from "@/components/ToastButton";
import ZustandCounterServer from "@/components/ZustandCounterServer";

export default function Home() {
  return (
    <main className="">
      <p>
        welcome.. <ToastButton />
      </p>
      <br />
      <ZustandCounterServer />
    </main>
  );
}
