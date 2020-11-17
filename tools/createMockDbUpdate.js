/* eslint-disable no-console */
const fs = require("fs");
const _ = require("lodash");
const path = require("path");

const faker = require("faker");

const randColor = ["red", "orange", "yellow", "green", "blue"];
const randSize = ["XS", "S", "M", "L", "XL", "XXL"];
const randBrand = ["Louis Vuitton", "Lacoste", "Gucci", "Chanel", "Balenciaga"];

function slugify(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function generateEmployees() {
  const products = [];
  for (let id = 0; id < 100; id++) {
    let name = faker.commerce.productName();
    let images = [...Array(_.random(1, 4)).keys()].map(() =>
      faker.image.fashion()
    );
    let price = _.random(20, 500);
    let onSale = _.random(0, 1) ? true : false;
    let promotionPrice = onSale
      ? price - (price / 100) * _.random(0, 20)
      : price;
    let colors = [...Array(_.random(1, randColor.length)).keys()].map(
      (item, key) => randColor[key]
    );
    let material = faker.commerce.productMaterial();
    let sizes = [...Array(_.random(1, randSize.length)).keys()].map(
      (item, key) => randSize[key]
    );
    let description = faker.lorem.paragraph();
    let url = slugify(name);

    products.push({
      id: id,
      name: name,
      description: description,
      price: {
        current: promotionPrice,
        old: price,
        onSale: onSale,
      },
      colors: colors,
      material: material,
      images: images,
      sizes: sizes,
      brand: _.sample(randBrand),
      url: url,
    });
  }

  return { products: products };
}

const data = JSON.stringify(generateEmployees());
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
