import { TTodo } from "@/lib/types";
import React from "react";
import Todo from "@/components/Todo";

// We ensure to add a type to our props
type Props = {
  todos: TTodo[];
};

export default function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
