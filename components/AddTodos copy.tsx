//using a normal fun onSubmit

"use client";

import { addTodo } from "@/actions/actions";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function AddTodos() {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") {
      toast.error("Please enter a valid todo");
      return;
    }
    await addTodo(input);
    setInput(""); // Clear the input field after submission
  };

  return (
    <div className="border-4 border-green-500">
      <form onSubmit={handleSubmit}>
        <Input
          name="text"
          placeholder="your todo"
          value={input}
          onChange={handleChange}
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
}
