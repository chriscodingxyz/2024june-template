"use client";

import { TTodo } from "@/lib/types";
import React from "react";
import { Button } from "./ui/button";
import { deleteTodoAction, toggleTodoCheckboxAction } from "@/actions/actions";
import { CircleX, Trash2 } from "lucide-react";

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
          size={"icon"}
          variant={"default"}
          onClick={() => deleteTodoAction(todo.id)}
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </li>
  );
}
