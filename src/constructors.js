export function TodoItem(title, description, project, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.project = project;
    this.dueDate = dueDate;
    this.priority = priority;
}

export function Project(name) {
    this.name = name;
    this.todos = [];

    this.addTodo = function(todo) {
        if (todo instanceof TodoItem) {
            this.todos.push(todo);
        }
    };

    this.removeTodo = function(todoTitle) {
        this.todos = this.todos.filter(function(todo) {
            return todo.title !== todoTitle;
        });
    };
}

export function ProjectManager() {
    this.projects = {};

    this.addProject = function(name) {
        if (!this.projects[name]) {
            this.projects[name] = new Project(name);
        }
    };

    this.getProjects = function() {
        return Object.values(this.projects);
    };

    this.addTodoToProject = function(todoItem) {
        if (!this.projects[todoItem.project]) {
            console.warn(`Project "${todoItem.project}" does not exist. Creating it.`);
            this.addProject(todoItem.project);
        }
        this.projects[todoItem.project].addTodo(todoItem);
    };

    this.removeTodoFromProject = function(projectName, todoTitle) {
        if (this.projects[projectName]) {
            this.projects[projectName].removeTodo(todoTitle);
        }
    };

    this.getTodosByProject = function(name) {
        if (this.projects[name]) {
            return this.projects[name].todos;
        }
        return [];
    };
}