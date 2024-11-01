const request = require('supertest');
const app = require("./server.js")

request(app)
    .get('/')
    .expect(200)
    .expect("Hello World!")
    .end(function (err, res) {
        if (err) throw err;
    });