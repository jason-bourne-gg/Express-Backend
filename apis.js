const express = require('express');
const fs = require('fs');

const router = express.Router();

// Endpoint to list all users
router.get('/listUsers', (req, res) => {
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    try {
      const users = JSON.parse(data);
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Endpoint to retrieve a specific user by ID
router.get('/showUser/:id', (req, res) => {
  const userId = req.params.id;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    try {
      const users = JSON.parse(data);
      const user = users.find((user) => user.id === userId);

      if (user) {
        res.json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Endpoint to delete a specific user by ID
router.delete('/deleteUser/:id', (req, res) => {
  const userId = req.params.id;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    try {
      let users = JSON.parse(data);
      const updatedUsers = users.filter((user) => user.id !== userId);

      if (users.length === updatedUsers.length) {
        res.status(404).send('User not found');
        return;
      }

      fs.writeFile('users.json', JSON.stringify(updatedUsers), 'utf8', (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
          return;
        }

        res.send('User deleted successfully');
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
});

module.exports = router;
