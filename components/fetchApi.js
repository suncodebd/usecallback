import { useEffect, useState } from "react";

function FetchApi() {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error feching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold mb-10">
        Fetch api useEffects Hooks make todos
      </h2>
      <div>
        {loading ? (
          <p>Loding Todos...</p>
        ) : (
          <ul className="">
            {todos.map((todo) => (
              <li className="text-xl" key={todo.id}>
                {todo.title} -{" "}
                <span className="font-bold">
                  {todo.completed ? "Completed" : "Incompleted"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FetchApi;
