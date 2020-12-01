/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const faker = require("faker");

function generateEmployees() {
  const products = [];
  for (let id = 0; id < 100; id++) {
    let name = faker.name.title();
    let description = faker.lorem.words(50);

    products.push({
      id: id,
      name: name,
      description: description,
    });
  }
  return { products: products };
}

const data = JSON.stringify(generateEmployees());
const filepath = path.join(__dirname, "data.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
