/**
 * Created by jchaves on 10/19/14.
 */
var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require
});

requirejs(['mongodb'], function(mongodb) {
    alert('This is a test.');
    var mongoClient = mongodb.MongoClient;

    // Connection URL
    var url = 'mongodb://localhost:27017/myproject';

    // Use connect method to connect to the Server
    mongoClient.connect(url, function(err, db) {
        alert("Connected correctly to server");
        db.close();
    });
});

