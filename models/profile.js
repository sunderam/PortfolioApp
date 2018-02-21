var mongoose = require('mongoose');

profileSchema = mongoose.Schema({
	name : String,
	bio : String
});

module.exports = mongoose.model('Profile',profileSchema);