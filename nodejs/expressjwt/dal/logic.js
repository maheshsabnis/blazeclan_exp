const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");
const jwt = require("jsonwebtoken");

// an object with JSON Web Token Secrets
const jwtSettings = {
  jwtSecret: "msitasus007700susaitsm",
};

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
      return resp.status(401).send({
        message: `User ${user.Email} is not authenticated, please check the password`,
      });
    }

    // authorize the user by generating the token
    const token = jwt.sign({ usr }, jwtSettings.jwtSecret, {
      expiresIn: 3600, // the 1 hor token expiry
      algorithm: "HS384",
    });
    return resp.status(200).send({
      message: `User ${user.Email} is authenticated successfully`,
      token: token,
    });
  }
  async getData(req, resp) {
    // check if the request contains AUTHORIZATION headers, if yes then read the token else
    // return the error Response

    if (req.headers.authorization !== undefined) {
      // received the token from the header
      const receivedToken = req.headers.authorization.split(" ")[1];
      // veridy the token the callback for verification will be executed asynchronously
      await jwt.verify(receivedToken, jwtSettings.jwtSecret, async (error,decoded) => {
        if(error) return resp.status(401).send({message:'Identity Verification is failed'});
        // provide the decoded token to the HTTP Request
        // so thet the response for the current request will be send
        req.decoded  = decoded;
        await sequelize.sync({ force: false });
        let data = await depts.findAll();
        return resp.status(200).send(data);
      });
    } else {
      return resp
        .status(401)
        .send({
          message: `Authentication failed because the AUTHORIZATION header id not presnt in request`,
        });
    }
  }
}

module.exports = AuthLogic;
