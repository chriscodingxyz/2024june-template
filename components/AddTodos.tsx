"use client";

import { addTodo } from "@/actions/actions";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { TTodoSchema, zTodoSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddTodos() {
  const {
    register,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TTodoSchema>({
    resolver: zodResolver(zTodoSchema),
  });

  return (
    <div className="border-4 border-green-500">
      <form>
        <Input {...register("text")} name="text" placeholder="your todo" />
        <p className="text-red-500">{errors.text?.message}</p>
        <Button
          formAction={async (formData) => {
            const result = await trigger();
            if (!result) return;
            const editedData = getValues();
            await addTodo(editedData.text);
            reset();
          }}
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
}
