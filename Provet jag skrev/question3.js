// 3 (4p) Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// completed: true
// Använd fetch och async/await, samt felhantering medd try/catch.

// Din kod här

const url = 'https://jsonplaceholder.typicode.com/todos/';

async function fetchTodoData() {
  const todoListContainer = document.querySelector('.todos');
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch the data');
    }
    const data = await response.json();
    const completedTodos = data.filter((todo) => todo.completed);
    completedTodos.forEach((todo) => {
      console.log(todo.title + ' ' + todo.completed);
      const todoTitleElement = document.createElement('p');
      todoTitleElement.textContent = todo.title;
      todoListContainer.appendChild(todoTitleElement);
    });
  } catch (error) {
    console.error('Error', error);
  }
}

// fetchTodoData();
