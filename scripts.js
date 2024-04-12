// Get the current date and time
const currentDate = new Date();

// Format the date and time
const formattedDate = currentDate.toLocaleString();

// Find the container element by its class name
const containerElement = document.querySelector('.container');

// Create a new paragraph element
const paragraphElement = document.createElement('p');

// Set the text content of the paragraph to the formatted date and time
paragraphElement.textContent = formattedDate;

// Append the paragraph element to the container element
containerElement.appendChild(paragraphElement);