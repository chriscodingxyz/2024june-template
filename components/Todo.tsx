"use client";

import { TTodo } from "@/lib/types";
import React from "react";
import { Button } from "./ui/button";
import { deleteTodoAction, toggleTodoCheckboxAction } from "@/actions/actions";

type Props = {
  todo: TTodo;
};

export default function Todo({ todo }: Props) {
  return (
    <li className="">
      <div className="flex items-center justify-between">
        <span>
          <span>
            <input
              type="checkbox"
              checked={todo.done}
              onClick={() => toggleTodoCheckboxAction(todo.id)}
            />
          </span>
          #{todo.id}
        </span>
        <span>{todo.text}</span>
        <span>{todo.done ? "✅" : "❌"}</span>
        <Button
          size={"tiny"}
          variant={"default"}
          onClick={() => deleteTodoAction(todo.id)}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
