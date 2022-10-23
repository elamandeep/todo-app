import { Input } from "./Input";
import { Lists } from "./Lists";
import { Menu } from "./Menu";

export function TodoApp() {
  return (
    <section class="flex flex-col w-80 md:w-[30rem]  fixed z-20">
      <Input />
      <Lists />
      <Menu />
    </section>
  );
}
