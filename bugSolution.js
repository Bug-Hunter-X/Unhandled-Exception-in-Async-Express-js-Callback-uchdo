const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Success!');
      } else {
        // Handle the error gracefully
        const error = new Error('Something went wrong!');
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));