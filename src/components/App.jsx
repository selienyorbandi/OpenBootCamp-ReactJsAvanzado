import React from "react";
import Settings from "../settings/Settings";

import "../styles/sass/App.scss";
import TodoList from "./lists/TodoList";
import useCounter from "../hooks/useCounter";
/**
 * Componente APP
 * @returns Componente principal de la aplicación
 */
const App = () => {
  const count = useCounter();
    return (
      <div>
        <h1>Bienvenido al proyecto base de React</h1>
        <h2>Estamos usando Webpack, Babel y Eslint</h2>
        <TodoList />
        <Settings />
        <div>
          <h2>Contador</h2>
          <input type="number" value={count.count} defaultValue={count.count} />
          <button type="button" onClick={count.increment}> + </button>
          <button type="button" onClick={count.decrement}> - </button>
          <button type="button" onClick={count.reset}>Reset</button>
        </div>
      </div>
    );
};

export default App;
