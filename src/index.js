import './style.css';
import { setupAddProjectButton } from './userinteractions';
import { updateProjectListUI } from './ui';

document.addEventListener('DOMContentLoaded', (event) => {
    // Ensures DOM content is fully loaded before attempting to update the UI
    updateProjectListUI();
    
    setupAddProjectButton();
    // Call other setup functions here as your app grows
});


// // Adding projects
// projectManager.addProject('Work');
// projectManager.addProject('Personal');

// // Creating and adding todos
// var todo1 = new TodoItem('Finish report', 'Complete the annual report', 'Work', '2024-04-10', 'High');
// var todo2 = new TodoItem('Buy groceries', 'Milk, Bread, Oranges & Beans', 'Personal', '2024-04-08', 'Medium');

// projectManager.addTodoToProject(todo1);
// projectManager.addTodoToProject(todo2);

// // Displaying todos by project
// console.log('Todos for Work: ', projectManager.getTodosByProject('Work'));
// console.log('Todos for Personal: ', projectManager.getTodosByProject('Personal'));

// // Change todo project
// projectManager.removeTodoFromProject(todo1.project, todo1.title);
// projectManager.addProject('Default');
// todo1.project = 'Default';
// projectManager.addTodoToProject(todo1);

// // Displaying todos by project
// console.log('Todos for Default: ', projectManager.getTodosByProject('Default'));
// console.log('Todos for Work: ', projectManager.getTodosByProject('Work'));
// console.log('Todos for Personal: ', projectManager.getTodosByProject('Personal'));


