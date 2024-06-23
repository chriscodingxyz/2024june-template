"use client";

import React from "react";
import { Button } from "./ui/button";
import { deleteAllTodosAction } from "@/actions/actions";

export default function TodosDeleteAllButton() {
  return (
    <Button
      size={"sm"}
      variant={"destructive"}
      onClick={() => deleteAllTodosAction()}
    >
      Delete ALL ⚠️
    </Button>
  );
}
