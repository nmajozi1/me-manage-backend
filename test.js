const mongoCLient = require('mongodb').MongoClient;

mongoCLient.connect("mongodb://localhost:27017/budget", function(err, db) {
    if(err) {
        console.log('THERE IS AN ERROR: ', err)
    } else {
        console.log('mamma I made it. ');
    }
});