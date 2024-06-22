"use client";

import { TTodo } from "@/lib/types";
import React from "react";
import { Button } from "./ui/button";
import { deleteTodoAction, toggleTodoCheckboxAction } from "@/actions/actions";

type Props = {
  todo: TTodo;
};

// function toggleCheckbox(id) {}

console.log("inside of tododododododod");

export default function Todo({ todo }: Props) {
  return (
    <li className="border border-red-500">
      <div className="flex items-center justify-between">
        <span>
          <span>
            <input
              type="checkbox"
              checked={todo.done}
              onClick={() => toggleTodoCheckboxAction(todo.id)}
            />
          </span>
          id: {todo.id}
        </span>
        <span>{todo.text}</span>
        <span>{todo.done ? "✅" : "❌"}</span>
        <Button
          size={"sm"}
          variant={"destructive"}
          onClick={() => deleteTodoAction(todo.id)}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
