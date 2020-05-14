const Post = require("../database/models/Post");

module.exports = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (req.session.userId) {
    return res.render("edit", {
      post,
    });
  }

  res.redirect("/auth/login");
};
