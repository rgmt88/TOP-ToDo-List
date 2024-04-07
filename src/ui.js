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
        ul.appendChild(li);
    });
}