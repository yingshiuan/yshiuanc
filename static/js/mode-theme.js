
function getUserPreference() {
  return localStorage.getItem('mode') || 'tonality';
}

function saveUserPreference(userPreference) {
  localStorage.setItem('mode', userPreference);
}


function getAppliedMode(userPreference) {
  if (userPreference === 'light_mode') {
    return 'light_mode';
  }
  if (userPreference === 'dark_mode') {
    return 'dark_mode';
  }
  
  // system
  if (matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark_mode';
  }
  return 'light_mode';
}



const colorScheme = document.querySelector('meta[name="color-scheme"]');
function setAppliedMode(mode) {
  document.body.className = mode;
  colorScheme.content = mode;
}



/*change the content */
function rotatePreferences(userPreference) {
  if (userPreference === 'tonality') {
    return 'light_mode'
  }
  if (userPreference === 'light_mode') {
    return 'dark_mode';
  }
  if (userPreference === 'dark_mode') {
    return 'tonality';
  }
  // for invalid values, just in case
  return 'tonality';
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
