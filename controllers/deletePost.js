const Post = require("../database/models/Post");

module.exports = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id).then(res.redirect("/"));
};
