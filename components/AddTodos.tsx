import { addTodo } from "@/actions/actions";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "./ui/button";

export default function AddTodos() {
  return (
    <div className="border-4 border-green-500">
      <form>
        <Input name="text" placeholder="your todo" />
        <Button type="submit" formAction={addTodo}>
          Add Todo
        </Button>
      </form>
    </div>
  );
}
