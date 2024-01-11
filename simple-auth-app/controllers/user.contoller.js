const Users = {
  async registration(req, res) {
    try {
      //   const fullname = req.body.fullname;
      //   const username = req.body.username;
      //   const password = req.body.password;

      const fullname = req.query.fullname;
      const username = req.query.username;
      const password = req.query.password;

      console.log(fullname, username, password);
      return res.status(200).json({ data: req.query });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async login() {},
};

module.exports = Users;
