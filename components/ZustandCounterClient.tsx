"use client";

import { useCounterStore } from "@/store/store";
import { Button } from "./ui/button";

export default function ZustandCounterClient() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="p-2 border-4 border-primary border-b-0 border-dashed">
      <h2 className="text-center font-bold">🐻 Count: {count}</h2>
      <div className="flex gap-1">
        <Button onClick={decrement}>-</Button>
        <Button onClick={reset}>reset</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
}
