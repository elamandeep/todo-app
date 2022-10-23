import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { TodoApp } from "./components/TodoApp";

function App() {
  return (
    <>
      <Layout>
        <Header/>
        <TodoApp />
      </Layout>
    </>
  );
}

export default App;
