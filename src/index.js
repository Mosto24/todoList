import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './todoListApp';
import StartingApp from './StartingApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StartingApp/>
    <TodoList/>
  </React.StrictMode>
);
