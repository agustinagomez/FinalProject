const { Report, Posts, Users } = require("../../db.js");

const getReports = async (req, res) => {
  try {
    let findReport = await Report.findAll({
      include: [
        {
          model: Posts,
          as: "Reported_User",
          attributes: ["userId", "type", "title", "description"],
        },
        {
          model: Users,
          as: "Reporting_User",
          attributes: ["name", "email", "username"],
        },
      ],
    });

    findReport.length === 0
      ? res.json("There are currently no reports")
      : res.json(findReport);
  } catch (error) {
    res.send(error);
  }
};

module.exports = getReports;
