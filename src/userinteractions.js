import { getProjectManager } from "./projectManagerModule";
import { updateProjectListUI } from "./ui";
import { saveData } from "./localstorage";

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
