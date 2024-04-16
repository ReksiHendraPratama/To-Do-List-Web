document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    // Function to create a new task item
    function addTask(taskText) {
      const listItem = document.createElement('li');
      const taskTextElement = document.createElement('span');
      taskTextElement.textContent = taskText;
      listItem.appendChild(taskTextElement);
  
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      listItem.appendChild(checkBox);
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.style.backgroundColor = 'blue'; // Set blue color for Edit button
      listItem.appendChild(editButton);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.style.backgroundColor = 'red'; // Set red color for Delete button
      listItem.appendChild(deleteButton);
  
      // Event listener for edit button
      editButton.addEventListener('click', function() {
        const newText = prompt('Enter new task:', taskText);
        if (newText !== null && newText.trim() !== '') {
          taskTextElement.textContent = newText;
        }
      });
  
      // Event listener for delete button
      deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
      });
  
      // Event listener for checkbox
      checkBox.addEventListener('change', function() {
        if (this.checked) {
          taskTextElement.style.textDecoration = 'line-through';
        } else {
          taskTextElement.style.textDecoration = 'none';
        }
      });
  
      // Append the new task item to the list
      todoList.appendChild(listItem);
    }

    // Event listener for form submission
    todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const newTask = todoInput.value.trim();
      if (newTask !== '') {
        addTask(newTask);
        todoInput.value = ''; // Clear the input field
      } else {
        alert('Please enter a task!');
      }
    });
  });
  