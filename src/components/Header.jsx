import { createEffect, Show, createSignal } from "solid-js";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import { useGlobalContext } from "./Context";

const element = document.querySelector("html");

export function Header() {
  const {theme ,setTheme} = useGlobalContext()
  createEffect(() => {
    localStorage.setItem("theme", theme());
    switch (theme()) {
      case "light":
        element.classList.remove("dark");
        element.classList.add("light");
        break;

      case "dark":
        element.classList.add("dark");
        element.classList.remove("light");
        break;

      default:
        console.log("🛰🪐🦕");
        break;
    }
  });

  return (
    <>
      <section class="flex fixed z-10 top-5 md:top-10 justify-between items-center p-2 w-80 md:w-[30rem]">
        <h1 class="uppercase font-bold text-2xl md:text-3xl text-slate-200 dark:text-slate-300">todo</h1>
        <Show
          when={theme() !== "dark"}
          fallback={
            <button class="w-10 h-10" onClick={() => setTheme("light")}>
              <img src={sun} />
            </button>
          }
        >
          <button class="w-10 h-10" onClick={() => setTheme("dark")}>
            <img src={moon} />
          </button>
        </Show>
      </section>
    </>
  );
}
