// 3 (3p) Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// completed: true
// Använd fetch och async/await, samt felhantering medd try/catch.

// const url = 'https://jsonplaceholder.typicode.com/todos/';

// async function fetchTodoData() {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Failed to fetch todo data');
//     }
//     const todos = await response.json();
//     return todos;
//   } catch (error) {
//     console.error('Error fetching todo data:', error.message);
//     return [];
//   }
// }

// async function displayCompletedTodos() {
//   const todoListContainer = document.querySelector('#todoList');
//   try {
//     const todos = await fetchTodoData();
//     const completedTodos = todos.filter((todo) => todo.completed);
//     completedTodos.forEach((todo) => {
//       console.log(todo.title + ' ' + todo.completed)
//       ;const todoTitleElement = document.createElement('p');
//       todoTitleElement.textContent = todo.title;
//       todoListContainer.appendChild(todoTitleElement);
//     });
//   } catch (error) {
//     console.error('Error displaying the todos:', error.message); 
//   }
// }

// displayCompletedTodos();

async function fetchTodoData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');

    if (!response.ok) {
      throw new Error('Faild to fetch data');
    }

    const todos = await response.json();
    console.log(todos);
    return todos;
  } catch (error) {
    console.error('Error fetching data', error.message);
    return [];
  }
}

async function displayCompletedTodos() {
  
    const todoListContainer = document.querySelector('#todoList');


  try {
    const todos = await fetchTodoData();

    const completedTodos = todos.filter((todo) => {
        return todo.completed
    })
    
    completedTodos.forEach((todo) => {
      console.log(todo.id, todo.completed);
      
      const todoTitleElement = document.createElement('p');
      todoTitleElement.textContent = todo.title;
      todoListContainer.appendChild(todoTitleElement);
    });
} 


catch (error) {
    console.error('Error displaying the todos', error.message);
  }


}

displayCompletedTodos();
