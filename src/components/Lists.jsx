import { useGlobalContext } from "./Context";
import { createEffect, Show } from "solid-js";
import { produce } from "solid-js/store";
import check from "../assets/icon-check.svg";
import cross from "../assets/icon-cross.svg";

export function Lists() {
  const { todos, setTodos, reload, setReload } = useGlobalContext();

  createEffect(() => {
    const values = () => [...todos];
    localStorage.setItem("todos", JSON.stringify(values()));
  });

  const handleCheck = (id) => {
    setTodos(
      (todo) => todo.id === id,
      produce((todo) => (todo.isChecked = !todo.isChecked))
    );
    setReload(!reload());
  };

  const deleteItem = (id) => {
    setTodos([...todos.slice(0, id), ...todos.slice(id + 1)]);
  };

  return (
    <div class="w-full bg-white dark:bg-slate-900 max-h-80 h-full overflow-y-auto mt-3 rounded-t-md  text-lg">
      <Show
        when={todos.length > 0}
        fallback={
          <div class="flex text-slate-500 dark:text-slate-500 justify-center p-3 border-b border-slate-300 dark:border-slate-800">
            No Item is available
          </div>
        }
      >
        {todos.map((t, index) => {
          const { id, todo, isChecked } = t;
          return (
            <div class="p-3 text-slate-700 dark:text-slate-300 grid grid-cols-6  border-b border-slate-800 cursor-pointer">
              <div class="relative w-5 h-5 ">
                <input
                  type="checkbox"
                  onChange={[handleCheck, id]}
                  checked={isChecked}
                  class="absolute opacity-0 cursor-pointer w-10 h-10 "
                />
                <Show
                  when={isChecked}
                  fallback={
                    <div class="flex justify-center items-center w-full h-full rounded-full border border-slate-800 hover:border-cyan-600 "></div>
                  }
                >
                  <div class="flex justify-center items-center w-full h-full rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 p-1">
                    <img src={check} />
                  </div>
                </Show>
              </div>
              <Show when={isChecked} fallback={<span>{todo}</span>}>
                <span className="line-through text-slate-400 dark:text-slate-700">
                  {todo}
                </span>
              </Show>

              <Show
                when={isChecked}
                fallback={
                  <button
                    class="col-span-4 place-self-end"
                    onClick={[deleteItem, index]}
                  >
                    <img src={cross} class="w-5 h-5" />
                  </button>
                }
              ></Show>
            </div>
          );
        })}
      </Show>
    </div>
  );
}
