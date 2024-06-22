import { z } from "zod";

export const zTodoSchema = z.object({
  text: z
    .string()
    .min(5, { message: "Todo must have atleast 5 characters" })
    .max(50, { message: "Todo must be less than 50 characters" }),
});

export type TTodoSchema = z.infer<typeof zTodoSchema>;
