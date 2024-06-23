"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ToastButton({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <Button onClick={() => toast("Cheers! 🍻")}>{children}</Button>;
}
