/* eslint-disable no-console */
const fs = require("fs");
const _ = require("lodash");
const path = require("path");

const faker = require("faker");

const ranColor = ["red", "orange", "yellow", "green", "blue"];
const ranSize = ["XS", "XS/S", "S", "S/M", "M"];
const ranBrand = ["Louis Vuitton", "Lacoste", "Gucci", "Chanel", "Balenciaga"];

function generateEmployees() {
  const products = [];
  for (let id = 0; id < 100; id++) {
    let name = faker.name.title();
    let price = _.random(20, 500);
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
