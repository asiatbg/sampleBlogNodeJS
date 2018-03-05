const mongoose = require('mongoose');
mongoose.connect('mongodb://root:root@ds255588.mlab.com:55588/simple_post');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Yay, you're connected!");
});
