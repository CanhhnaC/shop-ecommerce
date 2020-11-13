/* eslint-disable no-console */
const fs = require("fs");
const _ = require("lodash");
const path = require("path");

var faker = require("faker");

var ranColor = ["red", "orange", "yellow", "green", "blue"];
var ranSize = ["XS", "XS/S", "S", "S/M", "M"];
var ranBrand = ["Louis Vuitton", "Lacoste", "Gucci", "Chanel", "Balenciaga"];

function generateEmployees() {
  var products = [];
  for (var id = 0; id < 100; id++) {
    var name = faker.name.title();
    var price = faker.commerce.price();
    let image = faker.image.fashion();
    let color = _.sample(ranColor);
    let description = faker.lorem.words(50);

    products.push({
      id: id,
      name: name,
      description: description,
      price: price,
      color: color,
      image: image,
      size: _.sample(ranSize),
      brand: _.sample(ranBrand),
    });
  }
  return { products: products };
}

const data = JSON.stringify(generateEmployees());
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
