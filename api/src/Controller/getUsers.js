const { Users, Posts } = require("../db");

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();

    return res.json(users);
  } catch (error) {
    return res.send(error);
  }
};

module.exports = getUsers;
