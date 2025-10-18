// Typing effect for the tagline
const typingElement = document.getElementById('typing-effect');
const text = "Junior Developer | Business Systems Student | Problem Solver";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Speed of typing
    }
}

// Start typing effect on page load
window.onload = function() {
    typingElement.innerHTML = ""; // Clear initial text
    typeWriter();
};

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});