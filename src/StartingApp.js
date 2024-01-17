
function isJson(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}


function StartingApp() {
  if(!localStorage.getItem('todo_listNew') || !isJson(localStorage.getItem('todo_listNew'))) {
    localStorage.setItem('todo_listNew', JSON.stringify({}));
  }

  return (''
  );
}

export default StartingApp;
