import React from 'react';
import ReactDOM from 'react-dom/client';
import StartingApp from './StartingApp';
import TodoListApp from './todoListApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StartingApp/>
    <TodoListApp/>
  </React.StrictMode>
);
