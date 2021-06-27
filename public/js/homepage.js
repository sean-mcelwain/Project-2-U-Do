// Handler to Delete the Selected List
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/lists/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete list');
    }
  }
};

document
  .querySelector('.list-list')
  .addEventListener('click', delButtonHandler);
