import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className="rounded-lg border-2 border-red-500 p-4 lg:border-green-500"
    >
      count is {count}
    </button>
  );
}
