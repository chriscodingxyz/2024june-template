"use client";

import React from "react";
import { Button } from "./ui/button";
import { deleteAllTodosAction } from "@/actions/actions";

export default function TodosDeleteAllButton() {
  const asyncOnclick = async () => {
    await deleteAllTodosAction();
  };

  return (
    <Button size={"sm"} variant={"destructive"} onClick={asyncOnclick}>
      Delete ALL!!!! ⚠️
    </Button>
  );
}
