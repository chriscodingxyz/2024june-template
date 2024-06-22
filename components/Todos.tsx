import { getTodos } from "@/actions/actions";
import React from "react";
import AddTodos from "./AddTodos";
import Todo from "./Todo";
import TodoList from "./TodoList";

export default async function Todos() {
  const todos = await getTodos();

  console.log("todos", todos);

  return (
    <div className="border-4 border-pink-500">
      <p>Todos length: {todos.length}</p>
      <AddTodos />
      Todolist:
      <TodoList todos={todos} />
    </div>
  );
}
