const updateFormHandler = async (event) => {
  event.preventDefault();

  console.log("triggerfunction");

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

document
.querySelector('.todolistcont')
  .addEventListener('submit', updateFormHandler);

  const smsHandler = async (event) => {
    event.preventDefault();
  
    
    const name = document.querySelector('#list-name').value.trim();
    const description = document.querySelector('#list-desc').value.trim();
  
  console.log(name, description);

  const response = await fetch(`/api/lists/api`, {
    method: 'POST',
    body: JSON.stringify({ name, description }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  };

  
document
.querySelector('.smsapi')
  .addEventListener('submit', smsHandler);



