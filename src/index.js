import React from 'react';
import ReactDOM from 'react-dom/client';
import AddNewForm from './todoListAddNewTaskForm';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <AddNewForm/>
  </React.StrictMode>
);
