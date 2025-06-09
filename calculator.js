// File: calculator.js

document.addEventListener('DOMContentLoaded', function() {
    // Get references to input fields and the result display span
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const calculationResultSpan = document.getElementById('calculation-result');

    // Get references to all operation buttons
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');

    // --- Arithmetic Functions ---

    /**
     * Adds two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The sum of a and b.
     */
    function add(a, b) {
        return a + b;
    }

    /**
     * Subtracts the second number from the first.
     * @param {number} a - The first number (minuend).
     * @param {number} b - The second number (subtrahend).
     * @returns {number} The difference (a - b).
     */
    function subtract(a, b) {
        return a - b;
    }

    /**
     * Multiplies two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The product of a and b.
     */
    function multiply(a, b) {
        return a * b;
    }

    /**
     * Divides the first number by the second.
     * Handles division by zero by returning an error message.
     * @param {number} a - The dividend.
     * @param {number} b - The divisor.
     * @returns {number|string} The quotient (a / b) or "Error: Division by zero" if b is 0.
     */
    function divide(a, b) {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    }

    // --- Helper function to get input values and perform calculation ---
    function performCalculation(operationFunction) {
        // Get values from input fields, converting them to float.
        // Use || 0 to default to 0 if the input field is empty or not a valid number.
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;

        // Perform the calculation using the provided operation function
        const result = operationFunction(number1, number2);

        // Display the result in the span element
        calculationResultSpan.textContent = result;
    }

    // --- Attach Event Listeners to Buttons ---

    // Event listener for the Add button
    addButton.addEventListener('click', function() {
        performCalculation(add);
    });

    // Event listener for the Subtract button
    subtractButton.addEventListener('click', function() {
        performCalculation(subtract);
    });

    // Event listener for the Multiply button
    multiplyButton.addEventListener('click', function() {
        performCalculation(multiply);
    });

    // Event listener for the Divide button
    divideButton.addEventListener('click', function() {
        performCalculation(divide);
    });
});
