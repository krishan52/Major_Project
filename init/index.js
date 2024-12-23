const mongoose = require("mongoose");
const initData = require("./data.js");

const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/lodgr";

main()
  .then(() => {
    console.log("DB Connected"); //main func ko call krne k liye
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66ceec3015fba332a870f2d6",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialzed");
};

initDB();
