const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

let currentTheme = localStorage.getItem('theme');

console.log(currentTheme)
