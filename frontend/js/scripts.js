document.addEventListener('DOMContentLoaded', () => {
  // Example navigation and form handling logic
  // Add your JavaScript code here to handle the navigation between screens,
  // form submissions, and interactions with the backend API.

  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('registration-form');
  const addPetForm = document.getElementById('add-pet-form');
  const petsList = document.getElementById('pets-list');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Handle login logic here
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Handle registration logic here
      window.location.href = 'register_success.html';
    });
  }

  if (addPetForm) {
    addPetForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const pet = {
        name: addPetForm['pet-name'].value,
        species: addPetForm['pet-species'].value,
        age: parseInt(addPetForm['pet-age'].value),
        userId: 1 // Example user ID
      };
      fetch('/api/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Pet added:', data);
        // Add the new pet to the list
      })
      .catch(error => console.error('Error:', error));
    });
  }

  if (petsList) {
    fetch('/api/pets')
      .then(response => response.json())
      .then(data => {
        petsList.innerHTML = data.pets.map(pet => `
          <li class="list-group-item">
            ${pet.name} (${pet.species}, ${pet.age} years old)
            <button onclick="viewPet(${pet.id})">View</button>
          </li>
        `).join('');
      })
      .catch(error => console.error('Error:', error));
  }
});
