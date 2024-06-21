import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ToastButton() {
  return <Button onClick={() => toast("Clicked!")}>Click for Toast</Button>;
}
