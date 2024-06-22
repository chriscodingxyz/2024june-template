"use client";

import { addTodo } from "@/actions/actions";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import { TTodo } from "@/lib/types";
import { TTodoSchema, zTodoSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";

// interface TodoFormInputs {
//   Ttodo;
// }

export default function AddTodos() {
  const {
    register,
    // handleSubmit,//used in just react-hook-form method
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
        <Input
          {...register("text", { required: true })}
          name="text"
          placeholder="your todo"
        />
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
