



function getUserPreference() {
  return localStorage.getItem('theme') || 'system';
}

function saveUserPreference(userPreference) {
  localStorage.setItem('theme', userPreference);
}

function getAppliedMode(userPreference) {
  if (userPreference === 'light-theme') {
    return 'light-theme';
  }
  if (userPreference === 'dark-theme') {
    return 'dark-theme';
  }
  
  // system
  if (matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark-theme';
  }
  return 'light-theme';
}

const colorScheme = document.querySelector('meta[name="color-scheme"]');
function setAppliedMode(mode) {
  document.body.className = mode;
  colorScheme.content = mode;
}

function rotatePreferences(userPreference) {
  if (userPreference === 'system') {
    return 'light-theme'
  }
  if (userPreference === 'light-theme') {
    return 'dark-theme';
  }
  if (userPreference === 'dark-theme') {
    return 'system';
  }
  // for invalid values, just in case
  return 'system';
}


/* init and eventListener for null on safari */
function init() {
  var themeDisplay = document.getElementById('mode');
  var themeToggler = document.getElementById('mode-button');
  themeToggler.onclick = () => {
    const newUserPref = rotatePreferences(userPreference);
    userPreference = newUserPref;
    saveUserPreference(newUserPref);
    themeDisplay.innerText = newUserPref;
    setAppliedMode(getAppliedMode(newUserPref));
  }
  let userPreference = getUserPreference();
  setAppliedMode(getAppliedMode(userPreference));
  themeDisplay.innerText = userPreference;
}

document.addEventListener('readystatechange', function() {
  if (document.readyState === "complete") {
    init();
  }
});








