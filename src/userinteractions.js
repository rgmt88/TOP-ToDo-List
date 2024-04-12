import { getProjectManager } from "./projectManagerModule";
import { updateProjectListUI } from "./ui";
import { saveData } from "./localstorage";
import { TodoItem } from "./constructors";

export function setupAddProjectButton() {
    const addProjectButton = document.getElementById('addProject');

    addProjectButton.addEventListener('click', function() {
        const projectName = prompt('Enter the name of the new project:');
        if (projectName) {
            const projectManager = getProjectManager();
            projectManager.addProject(projectName);
            updateProjectListUI();
            saveData(projectManager);
        } else {
            alert('Project creation was cancelled or no name was entered.');
        }
    });
}

export function setupAddTodoModal() {
    // Get the modal
    let modal = document.getElementById('addTodoModal');

    // Get the button that opens the modal
    let btn = document.getElementById('addTodo');

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        populateProjectDropdown();
        modal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    closeTodoModal();
}

export function closeTodoModal() {
    // Get the modal
    let modal = document.getElementById('addTodoModal');

    // Close the modal
    modal.style.display = 'none';
}

function populateProjectDropdown() {
    const projectDropdown = document.getElementById('todoProject');
    // Clear existing options
    projectDropdown.innerHTML = '';

    // Fetch projects
    const projects = getProjectManager().getProjects();
    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.name;
        option.textContent = project.name;
        projectDropdown.appendChild(option);
    });
}

export function setupAddTodoForm() {
    const addTodoForm = document.getElementById('addTodoForm');

    addTodoForm.addEventListener('submit', function(event) {
        // Prevent form from submitting the traditional way
        event.preventDefault();

        // Collect form data and use it to add a todo
        const title = document.getElementById('todoTitle').value;
        const description = document.getElementById('todoDescription').value;
        const dueDate = document.getElementById('todoDueDate').value;
        const projectName = document.getElementById('todoProject').value;
        const priority = document.getElementById('todoPriority').value;

        const projectManager = getProjectManager();    
        var todo = new TodoItem(title, description, projectName, dueDate, priority);
        projectManager.addTodoToProject(todo);

        // Close modal and update UI
        closeTodoModal();
        updateProjectListUI();

        // Save the updated manager state
        saveData(projectManager);
    });
}
