import { createEffect, createSignal, onMount } from "solid-js";
import { useGlobalContext } from "./Context";


function gen_uuid(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}


export function Input() {
  let input;
  const {todos, setTodos } = useGlobalContext();
  const [ todo ,setTodo] = createSignal({})


  createEffect(()=>{
    const value = ()=>{
        return [...todos ]
    }
    localStorage.setItem("todos", JSON.stringify(value()))
  })

  function handleChange() {
    setTodo({...todo(),  id: gen_uuid(), todo: input.value, isChecked: false })
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo()])
    
    input.value = "";
  }

 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          ref={input}
          onChange={handleChange}
          placeholder="Create a new todo"
          required
          class="w-full bg-white dark:bg-slate-900 p-4 rounded-md text-slate-700 dark:text-slate-200 outline-none shadow-xl text-lg md:text-xl"
        />
      </form>
    </>
  );
}
