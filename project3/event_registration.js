/*
		Your Name: Claudia Tchokouani
		Last Modified Date: 12/04/2024
		File: event_registration.js
		File Description: Event registration including 10 minute timer and ticket calculation
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.0;
var ticketSurcharge = 0.5;

/*** YOUR CODE STARTS BELOW HERE ***/
// Countdown Timer
let timeLeft = 600; // 10 minutes in seconds
let timerInterval = setInterval(updateTimer, 1000); // Update timer every second

// Function to update the timer
function updateTimer() {
  // Calculate minutes and seconds
  let minutes = Math.floor(timeLeft / 60);
  // Calculate the remaining seconds
  let seconds = timeLeft % 60;

  // Format seconds to prepend "0" if less than 10
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // Display the time left
  document.getElementById("timer").textContent = minutes + ":" + seconds;
  // Update the time left
  if (timeLeft > 0) {
    timeLeft--;
  } // If time has expired
  else {
    // Stop the timer
    clearInterval(timerInterval);
    // Display an alert message
    alert("Your time has expired. Redirecting to the page.");
    // Redirect to the same page
    location.href = "event_registration.html";
  }
}

// Function to calculate the total based on the number of tickets
function calculateTotal() {
  // Get the number of tickets entered
  const ticketInput = document.getElementById("numTickets");
  // Parse the number of tickets to an integer
  const numTickets = parseInt(ticketInput.value);
  // Initialize the total cost
  let totalCost = 0.0;
  // Get the error message element
  const errorMsg = document.getElementById("msgTickets");

  // Clear previous error message
  errorMsg.textContent = "";
  // Clear previous background color
  ticketInput.style.backgroundColor = "";
  // Hide the contact information section
  if (isNaN(numTickets) || numTickets < minTickets || numTickets > maxTickets) {
    errorMsg.textContent = "Please enter a valid number (1-3 tickets).";
    ticketInput.style.backgroundColor = "#f8d7da";
    document.getElementById("contactInformation").style.display = "none";
  } // Calculate the total cost and show the contact information section
  else {
    // Calculate the total cost
    totalCost = numTickets * costPerTicket + ticketSurcharge;
    // Display the total cost
    document.getElementById("totalCost").value = "$" + totalCost.toFixed(2);
    // Show contact information section when valid number of tickets is entered
    document.getElementById("contactInformation").style.display = "block";
  }
}

// Function to complete the purchase
function completePurchase() {
  // Get the name value
  const name = document.getElementById("name").value;
  // Get the email value
  const email = document.getElementById("email").value;
  // Get the name error message element
  const nameMsg = document.getElementById("msgname");
  // Get the email error message element
  const emailMsg = document.getElementById("msgemail");
  // Initialize error flag
  let hasError = false;

  // Clear previous error messages
  nameMsg.textContent = "";
  emailMsg.textContent = "";
  // Clear previous background colors
  document.getElementById("name").style.backgroundColor = "";
  document.getElementById("email").style.backgroundColor = "";

  // Validate name
  if (name === "") {
    // Display error message and change background color
    nameMsg.textContent = "Name is required.";
    document.getElementById("name").style.backgroundColor = "#f8d7da";
    hasError = true;
  }

  // Validate email
  if (email === "") {
    // Display error message and change background color
    emailMsg.textContent = "Email is required.";
    document.getElementById("email").style.backgroundColor = "#f8d7da";
    hasError = true;
  }

  if (!hasError) {
    // Stop the timer
    clearInterval(timerInterval);
    // Show success message
    const total = document.getElementById("totalCost").value;
    alert("Thank you for your purchase! Your total amount is " + total);
  }
}
