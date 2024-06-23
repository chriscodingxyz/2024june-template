import Image from "next/image";
import React from "react";

export default function PunksCard() {
  return (
    <main className=" border-4 border-primary flex-center-col mx-auto shadow-[8px_8px_0px_0px_#9f9f9f] border-dashed  hover:border-solid hover:opacity-85">
      <Image src="/punk1534.png" alt="punk1534" width={267} height={267} />
    </main>
  );
}
