"use client";

import { useCounterStore } from "@/store/store";
import { Button } from "./ui/button";

export default function ZustandCounterClient() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h2>Client Count: {count}</h2>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
