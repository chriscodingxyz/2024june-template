import { TTodo } from "@/lib/types";
import React from "react";

type Props = {
  todo: TTodo;
};

export default function Todo({ todo }: Props) {
  return <li>{todo.text}</li>;
}
