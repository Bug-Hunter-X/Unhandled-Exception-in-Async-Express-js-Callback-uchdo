# Unhandled Exception in Async Express.js Callback

This repository demonstrates a common error in Node.js Express.js applications: unhandled exceptions within asynchronous callbacks.  The `bug.js` file showcases a scenario where an error is thrown inside a `setTimeout` callback without proper error handling. This leads to the server crashing unexpectedly.  The `bugSolution.js` file provides a corrected version with improved error handling to prevent crashes.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install` to install the required `express` dependency.
3. Run `node bug.js` to see the server crash due to the unhandled exception.
4. Run `node bugSolution.js` to see the server handle the error gracefully.

## Bug Explanation

Asynchronous operations in Node.js, like `setTimeout`, often operate independently of the main event loop.  If an error is thrown inside an asynchronous callback and not caught, the process will crash without any clear indication of the problem.  This makes debugging more difficult.

## Solution

The key to preventing this is robust error handling within all asynchronous callbacks.  Use `try...catch` blocks to handle potential errors and implement appropriate logging or error reporting mechanisms.