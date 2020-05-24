const mongoose = require('mongoose');

mongoose.connect(
	process.env.MongoDB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (!err) {
			console.log('MongoDB connection succeeded!');
		} else {
			console.log('Error:' + err);
		}
	}
);

module.exports = { mongoose };
