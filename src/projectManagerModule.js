import { ProjectManager } from "./constructors";
import { loadData } from "./localstorage";

// Initialize projectManager by capturing the return value of loadData()
let projectManager = loadData();

// Export functions to get and set the projectManager instance
export function getProjectManager() {
    return projectManager;
}

export function setProjectManager(newManager) {
    projectManager = newManager;
}