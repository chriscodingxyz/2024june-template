import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuButton } from "./MenuButton";

export default function Header() {
  return (
    <header className="bg-primary/5 px-4 py-2 flex items-center justify-between animate ">
      <div className="max-w-3xl flex justify-between items-center mx-auto  w-full">
        <Avatar>
          <AvatarImage src="/punk1534.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <MenuButton />
        {/* <ModeToggle /> */}
      </div>
    </header>
  );
}
