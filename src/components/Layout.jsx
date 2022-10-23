import { Show } from "solid-js";
import bgDark from "../assets/bg-desktop-dark.jpg";
import bgDarkmb from "../assets/bg-mobile-dark.jpg";
import bgLight from "../assets/bg-desktop-light.jpg";
import bgLightmb from "../assets/bg-mobile-light.jpg";
import { useGlobalContext } from "./Context";

export function Layout(props) {
  const { theme, setTheme } = useGlobalContext();
  return (
    <>
      <main class="bg-slate-200 dark:bg-black flex flex-col justify-center items-center h-screen max-h-full font-Josefin">
        <Show
          when={theme() === "dark"}
          fallback={
            <>
              <img src={bgLight} class="w-full h-0 md:h-64 absolute top-0" />
              <img src={bgLightmb} class="w-full h-44 md:h-0 absolute top-0" />
            </>
          }
        >
          <img src={bgDark} class="w-full h-0 md:h-64 absolute top-0" />
          <img src={bgDarkmb} class="w-full h-44 md:h-0 absolute top-0" />
        </Show>
        {props.children}
      </main>
    </>
  );
}
