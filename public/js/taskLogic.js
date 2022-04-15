const addTask = async (event) => {
  event.preventDefault();
  const listId = document.querySelector(".updateBtn").getAttribute("data-id");
  const newTask = document.querySelector("#new-task").value.trim();

  if (newTask) {
    const taskObj = {
      task: newTask,
      listId,
    };
    const response = await fetch(`/api/tasks/`, {
      method: "POST",
      body: JSON.stringify(taskObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to add task");
    }
  }
};
const toggleComplete = async(event) => {
const taskID = event.target.getAttribute('data-task_id')
const response = await fetch(`/api/tasks/togcom/${taskID}`, {
    method: 'PUT',
    // body: JSON.stringify({ name, description }),
    headers: {
      'Content-Type': 'application/json',
    },
})
if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to update");
  }
}
const toggleProgress = async(event) => {
    const taskID = event.target.getAttribute('data-task_id')
const response = await fetch(`/api/tasks/progcom/${taskID}`, {
    method: 'PUT',
    // body: JSON.stringify({ name, description }),
    headers: {
      'Content-Type': 'application/json',
    },
})
if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to update");
  }
}
const updateTask = async(event) => {
    console.log(event.target)
}

document
  .getElementById("new-taskbtn")
  .addEventListener("click", addTask);

  const completeBtns = document
  .querySelectorAll('.toggle-complete')

  completeBtns.forEach(completeBtn => {
      completeBtn.addEventListener('click', toggleComplete); 
  })
  const progressBtns = document
  .querySelectorAll('.toggle-progress')

  progressBtns.forEach(progressBtn => {
    progressBtn.addEventListener('click', toggleProgress);
  }); 
const updateBtns = document
  .querySelectorAll('.update-task-btn')

updateBtns.forEach(updateBtn => {
    updateBtn.addEventListener('click', updateTask);
  }); 
    