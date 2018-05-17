var mongoose = require('mongoose');
const  DB_URI = "mongodb://azurwular:Akkraal25410*!@ds111299.mlab.com:11299/cos_library";
const dbURI = "mongodb://azurwular:Akkraal25410*!@ds111299.mlab.com:11299/cos_library";

function setDbUri(uri){
  dbURI = uri;
}

function connect(){
  return mongoose.connect(dbURI);  
}

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

module.exports = {
  setDbUri: setDbUri,
  connect: connect
}