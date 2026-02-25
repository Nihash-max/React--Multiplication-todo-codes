import  Calculator  from "./components/Calculator";
import Todo from "./components/Todo";
import "./App.css";

const App = () => {
  return (
    <>
      <section className="calculator-section">
        <Calculator />
      </section>

      <section className="todo-section">
        <Todo />
      </section>
    </>
  );
};

export default App;
