import {
  createContext,
  useContext,
  createSignal,
  createEffect,
} from "solid-js";
import { createStore } from "solid-js/store";

let AppContext = createContext();

export function AppProvider(props) {
  const [todos, setTodos] = createStore(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [reload, setReload] = createSignal(false);
  const [theme, setTheme] = createSignal(
    localStorage.getItem("theme") || "light"
  );

  return (
    <>
      <AppContext.Provider
        value={{ todos, setTodos, reload, setReload, theme, setTheme }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
