import { useGlobalContext } from "./Context";
import { createMemo } from "solid-js";
import { produce } from "solid-js/store";

function counter(myTodos) {
  let countItem = 0;
  myTodos.filter((todo) => {
    if (todo.isChecked === false) {
      countItem++;
    }
  });

  return countItem;
}

export function Menu() {
  const { todos, setTodos } = useGlobalContext();

  const count = createMemo(() => {
    return counter(todos);
  });

  const clearItems = () => {
    setTodos([])
  };

  return (
    <>
      <div class=" bg-white dark:bg-slate-900 dark:text-slate-300 shadow-md p-3 rounded-b-md text-sm flex justify-between">
        <h4 class=" text-slate-700 "> {count()} items left</h4>
        <div class=" gap-2 hidden md:flex">
          <label class="relative  text-blue-700 font-bold ">
            <input
              type="radio"
              class="absolute w-10 h-10 opacity-0"
              name="option"
              value="all"
            />
            All
          </label>
          <label class="relative  text-slate-500 dark:text-slate-700 dark:hover:text-slate-200 ">
            <input
              type="radio"
              class="absolute w-10 h-10 opacity-0"
              name="option"
              value="active"
            />
            Active
          </label>
          <label class="relative  text-slate-500 dark:text-slate-700 dark:hover:text-slate-200 ">
            <input
              type="radio"
              class="absolute w-10 h-10 opacity-0"
              name="option"
              value="completed"
            />
            Completed
          </label>
        </div>

        <button class="capitalize text-slate-500" onClick={clearItems}>
          clear completed
        </button>
      </div>

      <div class=" gap-6 md:hidden flex justify-center bg-white shadow-lg mt-2 p-3 rounded-md  dark:bg-slate-900">
          <label class="relative  text-blue-700 font-bold ">
            <input
              type="radio"
              class="absolute w-10 h-10 opacity-0"
              name="option"
              value="all"
            />
            All
          </label>
          <label class="relative  text-slate-500 dark:text-slate-700 dark:hover:text-slate-200 ">
            <input
              type="radio"
              class="absolute w-10 h-10 opacity-0"
              name="option"
              value="active"
            />
            Active
          </label>
          <label class="relative  text-slate-500 dark:text-slate-700 dark:hover:text-slate-200 ">
            <input
              type="radio"
              class="absolute w-10 h-10 opacity-0"
              name="option"
              value="completed"
            />
            Completed
          </label>
        </div>
    </>
  );
}
