import { integer, text, boolean, pgTable, serial } from "drizzle-orm/pg-core";

export const todo = pgTable("todoTemplate", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
