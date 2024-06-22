import { getTodos } from "@/actions/actions";
import AddTodos from "./AddTodos";
import TodoList from "./TodoList";
import TodosDeleteAllDoneButton from "./TodosDeleteAllDoneButton";
import TodosDeleteAllButton from "./TodosDeleteAllButton";

export default async function Todos() {
  const todos = await getTodos();

  return (
    <div className="border-4 border-pink-500">
      <p>Todos: {todos.length}</p>
      <AddTodos />
      {todos.length > 0 && (
        <>
          Todolist: <TodosDeleteAllDoneButton /> <TodosDeleteAllButton />{" "}
        </>
      )}

      <TodoList todos={todos} />
    </div>
  );
}
