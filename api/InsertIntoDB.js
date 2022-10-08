var faker = require('faker');
var fs = require('fs');

var database = { books: [] };

for (var i = 1; i <= 100; i++) {
    database.books.push({
        id: i,
        title: faker.lorem.words(),
        description: faker.lorem.sentences(),
        published: true
    });
}

var json = JSON.stringify(database);
fs.writeFile('api/database.json', json, 'utf8', (err) => {
    if (err) { console.error(err); return; };
    console.log("database.json created");

});