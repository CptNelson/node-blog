const Post = require("../database/models/Post");

module.exports = async (req, res) => {
  console.log("asd");
  await Post.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { upsert: true, new: true },
  ).then(res.redirect("/"));
};
