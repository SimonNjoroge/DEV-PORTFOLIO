const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

// Function to hide the menu
function hideMenu() {
   btn.classList.remove('open');
   nav.classList.remove('flex');
   nav.classList.add('hidden');
}

// Event listener for the menu button click
btn.addEventListener('click', () => {
   btn.classList.toggle('open');
   nav.classList.toggle('flex');
   nav.classList.toggle('hidden');
});

// Event listener for the scroll event on the window
window.addEventListener('scroll', () => {
   // Call the hideMenu function when the user scrolls
   hideMenu();
});
