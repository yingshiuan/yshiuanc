
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
  if (colorScheme) {
    colorScheme.content = mode.includes('light') ? 'light' : 'dark';
  }
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
  return 'tonality';
}



/* init and eventListener for null on safari */
function init() {
  let userPreference = getUserPreference();

  const themeDisplay = document.getElementById('mode');
  const themeTooltip = document.getElementById('mode-tooltip');
  const themeToggler = document.getElementById('mode-button');

  function applyTheme(pref) {
    const applied = getAppliedMode(pref);
    setAppliedMode(applied);

    if (themeDisplay) {
      themeDisplay.innerText = pref;
    }

    if (themeTooltip) {
      themeTooltip.innerText = applied.replace('_', ' ');
    }
  }

  if (themeToggler && themeDisplay) {
    themeToggler.onclick = () => {
      userPreference = rotatePreferences(userPreference);
      saveUserPreference(userPreference);
      applyTheme(userPreference);
    };
  }

  applyTheme(userPreference);
}

document.addEventListener('readystatechange', function () {
  if (document.readyState === 'complete') {
    init();
  }
});
