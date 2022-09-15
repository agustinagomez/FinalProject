const { Users } = require("../db");

const createUser = async (req, res) => {

  const { name, role, plan, email, password, username, avatar } = req.body;

  try {

    let user = await Users.create({
      name,
      role,
      plan,
      email,
      password,
      username,
      avatar,
    });

    return res.json(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  };
};

module.exports = createUser;
