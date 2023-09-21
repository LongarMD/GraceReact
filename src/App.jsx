import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="w-full h-full p-4">
      <button
        onClick={() => setCount((count) => count + 1)}
        className="p-3 border-2 rounded-lg border-red-500"
      >
        count is {count}
      </button>
    </main>
  );
}
