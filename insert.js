var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var mydb = db.db('LandTemperatures');
    var mydata ={dt : '1750-03-01',
                    LandAverageTemperature : '1.923',LandMaxTemperature : '8.242'};
    
    mydb.collection('LandTemperatures').insertOne(mydata,function(err,res){
        if(err) throw err;
        console.log('Data is recoede.')
        db.close();
    });
});