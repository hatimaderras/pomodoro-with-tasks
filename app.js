document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.querySelector("form");
    const taskTitle = document.getElementById("taskTitle");
    const taskDescription = document.getElementById("taskDescription");
    const taskPriority = document.getElementById("taskPriority");
    const taskList = document.querySelector(".list-group");
    
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
      
        const title = taskTitle.value.trim();
        const description = taskDescription.value.trim();
        const priority = taskPriority.value;
        
        if (title === "" || description === "") return;
        
        
        const taskItem = document.createElement("li");
        taskItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        taskItem.innerHTML = `
            <div>
                <strong>${title}</strong> - <small>${priority.toUpperCase()}</small>
            </div>
            <span>
                <button class="btn btn-outline-secondary btn-sm me-1 edit-btn">✏️</button>
                <button class="btn btn-outline-danger btn-sm delete-btn">🗑️</button>
            </span>
        `;
        
        taskList.appendChild(taskItem);
        
       
        taskTitle.value = "";
        taskDescription.value = "";
        taskPriority.value = "high";
        
       
        const modal = bootstrap.Modal.getInstance(document.getElementById("addTaskModal"));
        modal.hide();
        
        
        taskItem.querySelector(".delete-btn").addEventListener("click", () => {
            taskItem.remove();
        });
        
       
        taskItem.querySelector(".edit-btn").addEventListener("click", () => {
            taskTitle.value = title;
            taskDescription.value = description;
            taskPriority.value = priority;
            taskItem.remove();
        });
    });
});
