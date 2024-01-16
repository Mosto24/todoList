
function App() {
  if(!localStorage.getItem('todo_listNew')) {
    localStorage.setItem('todo_listNew', JSON.stringify({}));
  }

  return (''
  );
}

export default App;
