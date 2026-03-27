// Profiles Management
const profilesList = document.getElementById('profiles-list');
const manageButton = document.getElementById('manage-profiles');

// Default profiles
const defaultProfiles = [
  { name: 'Zezinho', avatar: 'avatar-1.png', kids: false },
  { name: 'Luizinho', avatar: 'avatar-2.png', kids: false },
  { name: 'Huguinho', avatar: 'avatar-3.png', kids: false }
];

// Load profiles from localStorage or use defaults
function loadProfiles() {
  let profiles = JSON.parse(localStorage.getItem('netflix-profiles')) || defaultProfiles;
  profilesList.innerHTML = '';

  profiles.forEach(profile => {
    const div = document.createElement('div');
    div.className = 'profile';
    div.role = 'button';
    div.tabIndex = 0;
    div.setAttribute('aria-label', `Selecionar perfil ${profile.name}`);
    div.innerHTML = `
      <figure>
        <img src="assets/${profile.avatar}" alt="Avatar de ${profile.name}" />
        <figcaption>${profile.name}</figcaption>
      </figure>
    `;
    // For now, clicking profiles does nothing, or could navigate to main page
    profilesList.appendChild(div);
  });

  // Add the "Add" profile
  const addDiv = document.createElement('div');
  addDiv.className = 'profile';
  addDiv.role = 'button';
  addDiv.tabIndex = 0;
  addDiv.id = 'add-profile';
  addDiv.setAttribute('aria-label', 'Adicionar novo perfil');
  addDiv.innerHTML = `
    <figure>
      <img src="assets/add.jpg" alt="Adicionar Perfil" />
      <figcaption>Add</figcaption>
    </figure>
  `;
  addDiv.addEventListener('click', () => {
    window.location.href = 'add-profile.html';
  });
  profilesList.appendChild(addDiv);
}

// Handle manage profiles button
manageButton.addEventListener('click', () => {
  window.location.href = 'manage-profiles.html';
});

// Load profiles on page load
loadProfiles();