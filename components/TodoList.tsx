import { TTodo } from "@/lib/types";
import React from "react";
import Todo from "@/components/Todo";

// We ensure to add a type to our props
type Props = {
  todos: TTodo[];
};

export default function TodoList({ todos }: Props) {
  return (
    <ul className="w-full border-t-4 border-primary border-dashed pt-2">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
