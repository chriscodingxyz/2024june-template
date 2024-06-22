"use server";

import db from "@/db/drizzle";
import { todo } from "@/db/schema";
import { revalidatePath } from "next/cache";

export const getTodos = async () => {
  return await db.select().from(todo);
};

export const addTodo = async (text: string) => {
  //   const text = Formdata.get("text") as string;
  console.log("this is in the server action", text);

  try {
    await db.insert(todo).values({
      text: text,
    });
  } catch (error) {
    return error;
  }

  revalidatePath("/");
};
