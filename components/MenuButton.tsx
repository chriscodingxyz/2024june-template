import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

// import { useMediaQuery } from "usehooks-ts";

export function MenuButton() {
  //   const [open, setOpen] = React.useState(false);
  //   const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ringHover">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            <div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Templates</li>
                <li>Tech Stacks</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetHeader>
          <SheetTitle>My Bookmarks</SheetTitle>
          <SheetDescription>
            <div>
              <ul>
                <li>Stuff</li>
                <li>Coding</li>
                <li>Crypto</li>
                <li>Tech Stacks</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
