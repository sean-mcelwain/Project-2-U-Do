const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#list-name').value.trim();
  const description = document.querySelector('#list-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/lists`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create list');
    }
  }
};


document
.querySelector('.new-list-form')
  .addEventListener('submit', newFormHandler);

