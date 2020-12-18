import React from "react";
import Typography from '@material-ui/core/Typography';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import useTodoState from './hooks/useTodoState';
import './App.css';

const App = () => {
  const {todos, addTodo, deleteTodo} = useTodoState([]);

  const saveTodo = (text) => {
    const trimmedText = text.trim();

    if (trimmedText.length > 0) {
      addTodo(trimmedText);
    }
  }

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm
        saveTodo={saveTodo}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default App;
