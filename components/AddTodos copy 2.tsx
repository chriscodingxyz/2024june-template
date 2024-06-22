//using react-hook-form

"use client";

import { addTodo } from "@/actions/actions";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";

interface TodoFormInputs {
  text: string;
}

export default function AddTodos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoFormInputs>();

  const onSubmit: SubmitHandler<TodoFormInputs> = async (data) => {
    if (data.text.trim() === "") {
      toast.error("Please enter a valid todo");
      return;
    }
    await addTodo(data.text);
    reset(); // Clear the form after submission
  };

  return (
    <div className="border-4 border-green-500">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("text", { required: true })}
          name="text"
          placeholder="your todo"
        />
        {errors.text && (
          <span className="text-red-500">This field is required</span>
        )}
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
}
