const express = require('express');
const cors = require('cors');
const db = require('./app/models');
const bookshelfRoute = require('./app/routes/bookshelf.routes')
const authRoute = require('./app/routes/auth.routes')

const app = express();

const corsOptions = {
    origin: 'http://localhost:4200'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/bookshelf', bookshelfRoute)
app.use('/auth', authRoute)

// db.mongoose.connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Database connected!');
// }).catch(err => {
//     console.log('Cant connect to database!', err);
//     process.exit();
// })

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the mean-stack app' })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
