"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut } from "lucide-react";

export default function AllPunksCard() {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(scale + 0.25);
  };

  const handleZoomReset = () => {
    setScale(1);
  };

  const handleZoomOut = () => {
    if (scale > 1) setScale(scale - 0.25);
  };

  return (
    <main className="border-4 border-primary flex-center-col mx-auto shadow-[8px_8px_0px_0px_#9f9f9f] border-dashed hover:border-solid hover:opacity-85">
      <Dialog>
        <DialogTrigger>
          <Image src="/punks.png" alt="punk1534" width={267} height={267} />
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>
              <div className="flex flex-col items-center">
                <div className="flex-center space-x-2">
                  <Button variant={"ringHover"} onClick={handleZoomOut}>
                    <ZoomOut />
                  </Button>
                  <Button onClick={handleZoomReset}>Reset</Button>

                  <Button variant={"ringHover"} onClick={handleZoomIn}>
                    <ZoomIn />
                  </Button>
                </div>
              </div>
            </DialogTitle>
            <DialogDescription className="overflow-auto">
              <div
                className="overflow-auto"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
              >
                <Image
                  src="/punks.png"
                  alt="punk1534"
                  width={2400}
                  height={2400}
                />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}
