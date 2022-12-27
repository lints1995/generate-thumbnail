const fs = require("fs");
const gm = require("gm").subClass({ imageMagick: "7+" });
const path = require("path");

const files = fs.readdirSync("./images");
files.forEach((el) => {
  if (el !== ".DS_Store") {
    gm(path.join(__dirname, `images/${el}`))
      .resize(20, 20, "%")
      .quality(30)
      .write(path.join(__dirname, `outImages/${el}`), (err) => {
        if (!err) return console.log("done");
      });
  }
});
