const { readfile } = require("../helper/filesystem");
const { applog } = require("../helper/log");
const { Uploads } = require("../model/jsonserver.model");

const Home = async (req, res, next) => {
  // await Uploads.post({ source: "uploads/img5" });
  // const data = await Uploads.delete(3);

  const data = await Uploads.get();
  res.render("home", { title: "home", data });
};

module.exports = { Home };
