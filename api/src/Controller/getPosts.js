const { Posts, Users } = require("../db");

const getPosts = async (req, res) => {
  try {
    const findPost = await Posts.findAll({
      include: {
        //Si quiero incluir a otro modelo para que se vea, pongo  include
        model: Users,
        attributes: ["name", "email"],
      },
    });
    return res.json(findPost);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = getPosts;
