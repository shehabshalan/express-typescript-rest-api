require("dotenv").config();
export default {
  port: 3000,
  dbUri: process.env.DB_URI,
};
