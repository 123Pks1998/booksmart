const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI).then((e) => console.log('mongoDB connected to booksmart'))

