import { saveData } from "./localstorage";
import { getProjectManager } from "./projectManagerModule";

export function updateProjectListUI() {
    const projectManager = getProjectManager();
    
    const ul = document.getElementById('htmlprojectlist');
    // Clear existing list items
    ul.innerHTML = '';

    // Retrieve an array of project names
    const projects = projectManager.getProjects();

    // Iterate over the project names and create a list
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.name;
        li.addEventListener('click', function() {
            displayTodosForProject(project.name);
        });
        
        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.onclick = function() {
            projectManager.removeProject(project.name);
            updateProjectListUI();
            saveData(projectManager);
        };
        li.appendChild(deleteBtn);

        ul.appendChild(li);
    });
}

export function displayTodosForProject(projectName) {
    const projectManager = getProjectManager();
    const todos = projectManager.getTodosByProject(projectName);
    const todosList = document.getElementById('todoItemsList');
    // Clear existing todos
    todosList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `${todo.title} - Due: ${todo.dueDate}`;
        todosList.appendChild(li);
    });
}