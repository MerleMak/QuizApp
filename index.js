// Retrieve the current theme from localStorage
let currentTheme = localStorage.getItem("theme");

// Apply the dark or light theme based on the currentTheme value
if (currentTheme === "dark") {
  // If the current theme is 'dark', add the 'darkmode' class to the body
  document.body.classList.add("darkmode");
} else {
  // If the current theme is not 'dark', remove the 'darkmode' class from the body
  document.body.classList.remove("darkmode");
}

// Find the dark mode switch in the document
const darkmodeSwitch = document.querySelector('[data-js="darkmode"]');

// Check if the dark mode switch element exists
if (darkmodeSwitch) {
  // Set the switch's checked state based on the current theme
  darkmodeSwitch.checked = currentTheme === "dark";

  // Add an event listener to handle change events on the switch
  darkmodeSwitch.addEventListener("change", function () {
    // Check the new state of the switch after it's changed
    if (darkmodeSwitch.checked) {
      // If the switch is checked, enable dark mode and update localStorage
      document.body.classList.add("darkmode");
      localStorage.setItem("theme", "dark");
    } else {
      // If the switch is not checked, disable dark mode and update localStorage
      document.body.classList.remove("darkmode");
      localStorage.setItem("theme", "light");
    }
  });
}
