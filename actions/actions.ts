"use server";
//before we add zod validation

import db from "@/db/drizzle";
import { todo } from "@/db/schema";
import { asc, eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getTodos = async () => {
  return await db.select().from(todo).orderBy(asc(todo.id));
};

export const addTodo = async (text: string) => {
  try {
    await db.insert(todo).values({
      text: text,
    });
  } catch (error) {
    return error;
  }
  revalidatePath("/");
};

export const deleteTodoAction = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));
  revalidatePath("/");
};

export const toggleTodoCheckboxAction = async (id: number) => {
  await db
    .update(todo)
    .set({ done: not(todo.done) })
    .where(eq(todo.id, id));
  revalidatePath("/");
};

export const deleteAllDoneTodosAction = async () => {
  await db.delete(todo).where(eq(todo.done, true));
  revalidatePath("/");
};

export const deleteAllTodosAction = async () => {
  await db.delete(todo);
  revalidatePath("/");
};
