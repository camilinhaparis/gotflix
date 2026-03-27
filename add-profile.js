// Add Profile Functionality
document.getElementById('profile-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('profile-name').value;
  const avatar = document.querySelector('input[name="avatar"]:checked').value;
  const kids = document.getElementById('profile-kids').checked;
  
  // Load existing profiles
  let profiles = JSON.parse(localStorage.getItem('netflix-profiles')) || [
    { name: 'Zezinho', avatar: 'avatar-1.png', kids: false },
    { name: 'Luizinho', avatar: 'avatar-2.png', kids: false },
    { name: 'Huguinho', avatar: 'avatar-3.png', kids: false }
  ];
  
  // Add new profile
  profiles.push({ name, avatar, kids });
  
  // Save to localStorage
  localStorage.setItem('netflix-profiles', JSON.stringify(profiles));
  
  // Redirect back
  window.location.href = 'index.html';
});