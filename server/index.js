const { User, connect } = require('./db');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const jsonParser = express.json();
const app = express();
app.use(cors());
connect();

// GET - request----------------------------------------------
//get users list
app.get('/api/users', cors(), (req, res) => {
  try {
    const getAllUser = async () => {
      const allUsers = await User.findAll();
      res.send(allUsers);
    };
    getAllUser();
  } catch (err) {
    res.status(400).send(err);
  }
});

// POST - request---------------------------------------------

//login
app.post('/api/users/login', cors(), jsonParser, (req, res) => {
  if (!req.body) {
    return res.status(400).send();
  }
  const user = req.body;
  const getUser = async () => {
    const userLog = await User.findAll({
      where: {
        name: user.name,
        password: user.password,
        status: true,
      },
    });
    userLog.forEach((el) => (el.dateLogin = new Date()));
    userLog.forEach((el) => el.save());
    userLog.length !== 0 ? res.send(userLog) : res.status(404).send();
  };
  getUser();
});

//Add user
app.post('/api/users', cors(), jsonParser, (req, res) => {
  if (!req.body) {
    return res.status(400).send();
  }
  const user = req.body;
  const setUser = async () => {
    user.dateReg = new Date();
    const allUsers = await User.findAll();
    if (allUsers.find((el) => el.name === user.name)) {
      return res.status(409).send('Пользователь уже существует');
    } else {
      await User.create(user);
      console.log('Пользователь успешно создан!');
      res.send(allUsers);
    }
  };
  setUser();
});

//Remove user
app.post('/api/users/delete', jsonParser, (req, res) => {
  if (!req.body) {
    return res.status(400).send();
  }
  const users = req.body; //body - array
  const setUser = async () => {
    await User.destroy({
      where: {
        id: users.map((el) => el.id),
      },
    });
    console.log('Users removed!');
    const allUsers = await User.findAll();
    res.send(allUsers);
  };
  setUser();
  // res.send('Users removed!');
});

//Ban user
app.put('/api/users/ban', jsonParser, (req, res) => {
  if (!req.body) {
    return res.status(400).send();
  }
  const users = req.body;
  try {
    const banUser = async () => {
      await User.update(
        { status: false },
        {
          where: {
            id: users.map((el) => el.id),
          },
        },
      );
      const allUsers = await User.findAll();
      res.send(allUsers);
    };
    banUser();
  } catch (err) {
    res.status(400).send(err);
  }
});

//Unblock user
app.put('/api/users/unblock', jsonParser, (req, res) => {
  if (!req.body) {
    return res.status(400).send();
  }
  const users = req.body;
  const banUser = async () => {
    await User.update(
      { status: true },
      {
        where: {
          id: users.map((el) => el.id),
        },
      },
    );
    const allUsers = await User.findAll();
    res.send(allUsers);
  };
  banUser();
});

app.get('*', cors(), (req, res) => {
  res.status(400).send('error');
});

app.post('*', cors(), (req, res) => {
  res.status(400).send('error');
});

app.put('*', cors(), (req, res) => {
  res.status(400).send('error');
});

app.delete('*', cors(), (req, res) => {
  res.status(400).send('error');
});

const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
