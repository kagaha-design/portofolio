// Display a message when the page loads.
console.log("Welcome to my developer portfolio!");

// Display the current year in the footer.
const footer = document.querySelector("footer p");

if (footer) {
footer.innerHTML = `&copy; ${new Date().getFullYear()} My Portfolio. Built with HTML, CSS, and JavaScript.`;
}
