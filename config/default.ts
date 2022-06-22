require("dotenv").config();
export default {
  port: 1337,
  dbUri: process.env.DB_URI,
  saltWorkFactor: 10,
};
