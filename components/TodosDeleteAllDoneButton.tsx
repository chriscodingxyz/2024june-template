"use client";

import React from "react";
import { Button } from "./ui/button";
import { deleteAllDoneTodosAction } from "@/actions/actions";

export default function TodosDeleteAllDoneButton() {
  const asyncOnclick = async () => {
    await deleteAllDoneTodosAction();
  };

  return (
    <Button size={"sm"} variant={"destructive"} onClick={asyncOnclick}>
      Delete All DONE TODOS
    </Button>
  );
}
