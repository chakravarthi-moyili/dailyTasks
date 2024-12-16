// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element by its tag name
    const form = document.querySelector('form');

    // Add an event listener for form submission
    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting the traditional way (page reload)
        event.preventDefault();

        // Show a success alert
        alert('Form submitted successfully!');

        // Optionally, clear the form after submission
        form.reset();
    });
});
// script.js

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const spanElement = document.querySelector('#home h1 span');
    const text = "My Website";  // The text to be typed out
    let index = 0;  // The starting index for typing
    let typingSpeed = 100;  // Speed of typing (ms)
    let deletingSpeed = 50;  // Speed of deleting (ms)
    let pauseTime = 2000;  // Pause time after typing finishes (ms)
    let deleting = false;  // Flag to track if we are deleting the text

    // Function to type the text
    function typeWriter() {
        if (!deleting) {
            // Type the text
            if (index < text.length) {
                spanElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Pause after typing is done
                setTimeout(function() {
                    deleting = true;  // Start deleting after pause
                    setTimeout(typeWriter, 500);  // Start deleting after a brief pause
                }, pauseTime);
            }
        } else {
            // Delete the text
            if (index > 0) {
                spanElement.innerHTML = text.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, deletingSpeed);
            } else {
                // Once the text is completely deleted, restart typing
                deleting = false;
                setTimeout(typeWriter, 500);  // Start typing again after a brief pause
            }
        }
    }

    // Start the typing effect
    typeWriter();
});
