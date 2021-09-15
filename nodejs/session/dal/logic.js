const { Sequelize, DataTypes } = require("sequelize");
const path = require('path');
const sequelize = new Sequelize("business", "root", "P@ssw0rd_", {
  host: "localhost",
  dialect: "mysql",
});

const depts = require(path.join(__dirname, "./../models/department"))(
  sequelize,
  Sequelize.DataTypes
);
const users = require(path.join(__dirname, "./../models/users"))(
  sequelize,
  Sequelize.DataTypes
);

class AuthLogic {
  async createUser(req, resp) {
    // logic for registering the user
    const user = req.body;
    // connect to database
    await sequelize.sync({ force: false });
    // check if the user already exist
    const usr = await users.findOne({ where: { Email: user.Email } });
    if (usr !== null) {
      return resp
        .status(409)
        .send({ message: `User ${user.Email} is already register` });
    }
    // else create the user
    const created = await users.create(user);
    return resp
      .status(201)
      .send({ message: `User ${user.Email} is  registered successfully` });
  }
  async authUser(req, resp) {
    // logic for registering the user
    const user = req.body;
    // connect to database
    await sequelize.sync({ force: false });
    // check if the user does not exist
    const usr = await users.findOne({ where: { Email: user.Email } });
    if (usr === null) {
      return resp
        .status(409)
        .send({ message: `User ${user.Email} is not registered` });
    }
    // match the password
    if (usr.Password.trim() !== user.Password.trim()) {
      return resp
        .status(401)
        .send({
          message: `User ${user.Email} is not authenticated, please check the password`,
        });
    }

    // login the user by assigning the sessionid
    req.session.loggedin = true; // the 'session' proprty is provided using express session middleware
    // assing the current Login user name to the 'name' property of the 'session' for the request
    req.session.name = user.Email;
    console.log(`The CUrrent Login USer is ${user.Email}`);
    return resp
      .status(200)
      .send({
        message: `User ${user.Email} is authenticated successfully`,
        id: req.sessionID,
      });
  }
  async getData(req, resp) {
    console.log(`The CUrrent Login USer Accessing the data is ${req.session.name}`);
    // please make sure that the request is having session names associated with it
    if (req.session.name === undefined) {
      // if not then respond unauthorized request
      return resp
        .status(401)
        .send({
          message: `You are not authorized to access the data, please login`,
        });
    }
    // else respond the data
    await sequelize.sync({ force: false });
    let data = await depts.findAll();
    return resp.status(200).send(data);
  }
  async logoff(req, resp) {
    console.log(`The CUrrent Login USer is ${req.session.name}`);
    // destroy the session for the current login user
    req.session.destroy();
    return resp.status(200).send({message: `USer is logedoff successfully`});
  }
}

module.exports = AuthLogic;
