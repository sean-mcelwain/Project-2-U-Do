const updateFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#list-name').value.trim();
  const description = document.querySelector('#list-desc').value.trim();
  const id = document.querySelector('.updateBtn').getAttribute('data-id');

  if (name && description) {
    const response = await fetch(`/api/lists/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to update list');
    }
  }
};
 
const addTask = async (event) => {
  event.preventDefault();
  console.log("jeans")
  const listId = document.querySelector('.updateBtn').getAttribute('data-id');
  const newTask = document.querySelector('#new-task').value.trim();
  
  if (newTask) {
    console.log(newTask)
    console.log(listId)
const  taskObj = {
  task: newTask,
  listId
}
    const response = await fetch(`/api/tasks/`, {
      method: 'POST',
       body: JSON.stringify( taskObj ),
      headers: {
        'Content-Type': 'application/json',
      },
    });
console.log(response)
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to update list');
//     }
   }
 };
document
.querySelector('#update-list-form')
  .addEventListener('submit', updateFormHandler);
document.getElementById("new-taskbtn")

  .addEventListener('click',addTask);
