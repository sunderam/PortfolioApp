var express = require('express');

var mongoose = require('mongoose');

var Profile = require('../models/profile');

var router = express.Router();

router.get('/', (req, res, next) =>{
	Profile.find()
	.exec()
	.then(data =>{
		console.log(data);
		res.status(200).json(data);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error:err
		});
	});
});

router.post('/admin/', (req, res, next)=>{
	const profile = new Profile({
		name : req.body.name,
		bio : req.body.bio
	});
	profile.save()
	.then(result => {
		console.log(result);
	})
	.catch(err => console.log(err));

	res.status(201).json({
		message : 'Handling POST request to /admin',
		createdProfile : profile
	});

});
module.exports = router;