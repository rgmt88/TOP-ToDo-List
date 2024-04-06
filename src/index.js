import { TodoItem, Project, ProjectManager } from "./constructors";

var projectManager = new ProjectManager();

// Adding projects
projectManager.addProject('Work');
projectManager.addProject('Personal');

// Creating and adding todos
var todo1 = new TodoItem('Finish report', 'Complete the annual report', 'Work', '2024-04-10', 'High');
var todo2 = new TodoItem('Buy groceries', 'Milk, Bread, Oranges & Beans', 'Personal', '2024-04-08', 'Medium');

projectManager.addTodoToProject(todo1);
projectManager.addTodoToProject(todo2);

// Displaying todos by project
console.log('Todos for Work: ', projectManager.getTodosByProject('Work'));
console.log('Todos for Personal: ', projectManager.getTodosByProject('Personal'));


