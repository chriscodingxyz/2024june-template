"use client";

import React from "react";
import { Button } from "./ui/button";
import { deleteAllDoneTodosAction } from "@/actions/actions";

export default function TodosDeleteAllDoneButton() {
  return (
    <Button
      size={"sm"}
      variant={"destructive"}
      onClick={() => deleteAllDoneTodosAction()}
    >
      Delete All DONE TODOS
    </Button>
  );
}
