import { getTodos } from "@/actions/actions";
import AddTodos from "./AddTodos";
import TodoList from "./TodoList";
import TodosDeleteAllDoneButton from "./TodosDeleteAllDoneButton";
import TodosDeleteAllButton from "./TodosDeleteAllButton";
import Image from "next/image";

export default async function Todos() {
  const todos = await getTodos();

  return (
    <div className="p-2 border-4 border-primary flex-center-col max-w-2xl mx-auto shadow-[8px_8px_0px_0px_#9f9f9f] border-dashed gap-2  bg-blue-300 hover:border-solid hover:opacity-85">
      <h1 className="text-2xl font-bold flex gap-1">
        <Image
          src="/rhflogo.png"
          alt="react-hook-form"
          width={30}
          height={30}
        />
        React-Hook-Form w/ Zod
        <Image src="/zodlogo.png" alt="zod logo" width={38} height={30} />
      </h1>
      {/* <p>Todos: {todos.length}</p> */}
      <AddTodos />
      {todos.length > 0 && (
        <div className="flex gap-1">
          <TodosDeleteAllDoneButton /> <TodosDeleteAllButton />{" "}
        </div>
      )}

      <TodoList todos={todos} />
    </div>
  );
}
