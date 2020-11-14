/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

var faker = require("faker");
function generateEmployees() {
  var products = [];
  for (var id = 0; id < 50; id++) {
    var name = faker.name.title();
    var price = faker.commerce.price();
    var description = faker.commerce.productDescription();
    let image = faker.image.fashion();
    let size = faker.random.number();
    products.push({
      id: id,
      name: name,
      price: price,
      description: description,
      image: image,
      size: size,
    });
  }
  return { products: products };
}

const data = JSON.stringify(generateEmployees());
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
