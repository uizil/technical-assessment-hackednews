var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  // your code here!

    Stories.insertOne(data, (err) => {
      if (err) console.log(err)
    })



  mongoose.disconnect();
};

seedDb(data);
