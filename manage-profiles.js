// Manage Profiles
const profilesContainer = document.getElementById('profiles-container');

// Default profiles
const defaultProfiles = [
  { name: 'Zezinho', avatar: 'avatar-1.png', kids: false },
  { name: 'Luizinho', avatar: 'avatar-2.png', kids: false },
  { name: 'Huguinho', avatar: 'avatar-3.png', kids: false }
];

// Load profiles
function loadProfiles() {
  let profiles = JSON.parse(localStorage.getItem('netflix-profiles')) || defaultProfiles;
  profilesContainer.innerHTML = '';

  profiles.forEach((profile, index) => {
    const div = document.createElement('div');
    div.className = 'profile-item';
    div.innerHTML = `
      <img src="assets/${profile.avatar}" alt="Avatar de ${profile.name}" />
      <span class="profile-name">${profile.name}</span>
      <button class="edit-btn" data-index="${index}">Editar</button>
      <button class="delete-btn" data-index="${index}">Excluir</button>
    `;
    profilesContainer.appendChild(div);
  });
}

// Handle edit
profilesContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    const index = e.target.dataset.index;
    let profiles = JSON.parse(localStorage.getItem('netflix-profiles')) || defaultProfiles;
    const newName = prompt('Novo nome do perfil:', profiles[index].name);
    if (newName && newName.trim()) {
      profiles[index].name = newName.trim();
      localStorage.setItem('netflix-profiles', JSON.stringify(profiles));
      loadProfiles();
    }
  } else if (e.target.classList.contains('delete-btn')) {
    const index = e.target.dataset.index;
    if (confirm('Tem certeza que deseja excluir este perfil?')) {
      let profiles = JSON.parse(localStorage.getItem('netflix-profiles')) || defaultProfiles;
      profiles.splice(index, 1);
      localStorage.setItem('netflix-profiles', JSON.stringify(profiles));
      loadProfiles();
    }
  }
});

// Load profiles on page load
loadProfiles();