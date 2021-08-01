var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var mydb = db.db('D:\ProgramData\Python\GlobalTemperatures.csv');
    var query = {year : '1895'};

    mydb.collection('LandTemperatures').deleteOne(query,function(err,obj){
        if (err) throw err;
            console.log('One Data is deleted.')
            db.close();
    });
});