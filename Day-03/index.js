// const logger = require("./logger");
const mongoose = require("mongoose");
const User = require("./models/user");
// logger.warn("Warn Info");
// logger.info("Info");
// logger.debug("Debug Info");

mongoose
  .connect(`mongodb://localhost:27017/testDB`)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.error(e));

run();
async function run() {
  //   const user = new User({ name: "Ram", age: 12, email: "Ram1@dnm.com" });
  //   await user.save();

  const user = await User.where("name").equals("Ram").where("age").equals(12);
  console.log(user);
}
