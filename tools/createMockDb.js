/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");


var faker = require('faker')
function generateEmployees () {
  var employees = []
  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()
    employees.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email
    })
  }
  return { "employees": employees }
}



const data = JSON.stringify(generateEmployees());
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
