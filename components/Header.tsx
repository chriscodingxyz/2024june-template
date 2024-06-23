import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuButton } from "./MenuButton";

export default function Header() {
  return (
    <header
      className="bg-background/90 px-4 py-2 flex items-center justify-between animate shadow-lg"
      style={{
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.10)",
      }}
    >
      <div className="max-w-3xl flex justify-between items-center mx-auto w-full">
        <Avatar className="border border-primary border-solid">
          <AvatarImage src="/punk1534.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-5xl font-extrabold flex items-center justify-between">
          <div>
            <span className="text-red-500">cherry</span>dub
          </div>
        </h1>
        <div className="flex-center">
          <MenuButton />
        </div>
        {/* <ModeToggle /> */}
      </div>
    </header>
  );
}
