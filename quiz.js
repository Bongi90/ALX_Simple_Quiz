// This script implements the functionality for a simple interactive quiz.

// Define the checkAnswer function. This function will be called when the user submits their answer.
function checkAnswer() {
    // Identify the Correct Answer:
    // Declare a variable named correctAnswer and assign it the string value "4".
    // This represents the correct answer to your quiz question "What is 2 + 2?".
    const correctAnswer = "4";

    // Retrieve the User’s Answer:
    // Use document.querySelector to select the currently checked radio button
    // by its name attribute name="quiz".
    // This will return the radio button element that the user has selected.
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');

    // Get the element where feedback will be displayed.
    const feedbackElement = document.getElementById('feedback');

    // Check if a choice was actually selected by the user.
    if (selectedChoice) {
        // Access the value property of the selected radio button to get the user’s answer.
        // Store this value in a variable named userAnswer.
        const userAnswer = selectedChoice.value;

        // Compare the User’s Answer with the Correct Answer:
        // Implement an if statement to compare userAnswer with correctAnswer.
        if (userAnswer === correctAnswer) {
            // If the values match, indicating the user’s answer is correct,
            // change the textContent of the element with the ID feedback to "Correct! Well done.".
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Optional: Add color for correct feedback
        } else {
            // If the values do not match, indicating the user’s answer is incorrect,
            // update the textContent of the feedback element to "That's incorrect. Try again!".
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Optional: Add color for incorrect feedback
        }
    } else {
        // If no choice is selected, provide feedback to the user.
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
    }
}

// Add an Event Listener to the Submit Button:
// Use document.getElementById to select the “Submit Answer” button by its ID, "submit-answer".
const submitButton = document.getElementById('submit-answer');

// Add a click event listener to this button, passing in the checkAnswer function as the callback
// to be executed when the button is clicked.
// Ensure you are not calling the checkAnswer function directly in the event listener (i.e., do not add ()
// after the function name in the addEventListener call).
submitButton.addEventListener('click', checkAnswer);
