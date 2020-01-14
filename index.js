const express= require('express');
const app = express();

const PORT =process.env.PORT || 4000;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://kolimayurs:29031991@cluster0-onizc.mongodb.net';

app.listen(PORT, () => {
	console.log('App Listen to PORT: '+PORT);
})