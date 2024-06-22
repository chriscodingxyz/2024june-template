import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Avatar>
        <AvatarImage src="/punk1534.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ModeToggle />
    </header>
  );
}
