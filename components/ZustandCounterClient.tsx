"use client";

import { useCounterStore } from "@/store/store";
import { Button } from "./ui/button";

export default function ZustandCounterClient() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <h2>Client Count: {count}</h2>
      <Button onClick={decrement}>-</Button>
      <Button onClick={reset}>reset</Button>
      <Button onClick={increment}>+</Button>
    </div>
  );
}
