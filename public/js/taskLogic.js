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

document
  .getElementById("new-taskbtn")
  .addEventListener("click", addTask);

  const completeBtns = document
  .querySelectorAll('.toggle-complete')

  completeBtns.forEach(completeBtn => {
      completeBtn.addEventListener('click',() => {
        console.log("complete btn clicked")
    }); 
  })
  const progressBtns = document
  .querySelectorAll('.toggle-progress')

  progressBtns.forEach(progressBtn => {
    progressBtn.addEventListener('click',() => {
      console.log("progress btn clicked")
  }); 
})
const updateBtns = document
  .querySelectorAll('.update-task-btn')

updateBtns.forEach(updateBtn => {
    updateBtn.addEventListener('click',() => {
      console.log("update btn clicked")
  }); 
})
    