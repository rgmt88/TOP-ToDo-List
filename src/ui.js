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

        // Click event to display todos and handle active toggling
        li.addEventListener('click', function() {
            // Remove 'active' class from all list items
            ul.querySelectorAll('li').forEach(x => x.classList.remove('active'));
            // Add 'active' class to the clicked list item
            li.classList.add('active');

            // Display todos for the clicked project
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

    // Optionally, auto-select the first project in the list
    const anyActive = ul.querySelector('.active');
    if (projects.length > 0 && !anyActive) {
        ul.children[0].click();
    }
}

export function displayTodosForProject(projectName) {
    const projectManager = getProjectManager();
    const todos = projectManager.getTodosByProject(projectName);
    const todosList = document.getElementById('todoItemsList');
    // Clear existing todos
    todosList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `${todo.title}: ${todo.description} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;
        
        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.onclick = function() {
            projectManager.removeTodoFromProject(projectName, todo.title);
            updateProjectListUI();
            saveData(projectManager);
        };
        li.appendChild(deleteBtn);

        todosList.appendChild(li);
    });



    if (todos.length === 0) {
        const emptyMesg = document.createElement('li');
        emptyMesg.textContent = 'No todos for his project.';
        todosList.appendChild(emptyMesg);
    }
}