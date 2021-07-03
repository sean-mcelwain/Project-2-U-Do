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

  const newTask = document.querySelector('#new-task').value.trim();
  console.log(newTask)

//   if (name && description) {
//     const response = await fetch(`/api/lists/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ name, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to update list');
//     }
//   }
 };
document
.querySelector('#update-list-form')
  .addEventListener('submit', updateFormHandler);
document.getElementById("new-taskbtn")

  .addEventListener('click',addTask);
