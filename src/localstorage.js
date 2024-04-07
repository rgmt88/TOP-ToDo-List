import { TodoItem, ProjectManager } from "./constructors";

// Save current state to local storage
export function saveData(projectManager) {
    localStorage.setItem('projectManagerData', JSON.stringify(projectManager));
}
  
// Load state from local storage
export function loadData() {
    var projectManager = new ProjectManager(); // Always initialize
    var data = localStorage.getItem('projectManagerData');
  
    if (data) {
      var parsedData = JSON.parse(data);
  
      Object.keys(parsedData.projects).forEach(function(projectName) {
        projectManager.addProject(projectName);
  
        parsedData.projects[projectName].todos.forEach(function(todo) {
          projectManager.addTodoToProject(new TodoItem(todo.title, todo.description, todo.project, todo.dueDate, todo.priority));
        });
      });
    }
    
    return projectManager; // Return the (potentially updated) projectManager
}
  
  
  