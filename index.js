// Create a button element
const button = document.createElement('button');

// Set the button text
button.innerText = 'What is the date?';

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Get the current date
    const currentDate = new Date();

    // Create a new h1 element
    const h1 = document.createElement('h1');

    // Set the h1 text to include the current date
    h1.innerText = `Today's date is ${currentDate.toDateString()}`;

    // Append the h1 element to the body of the HTML document
    document.body.appendChild(h1);
});

// Append the button to the body of the HTML document
document.body.appendChild(button);