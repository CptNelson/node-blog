module.exports = (req, res, next) => {
  console.log("asdd");
  console.log(req);
  console.log(res);
  req.session.destroy((err) => {
    res.redirect("/");
  });
  req.session = null;
};
