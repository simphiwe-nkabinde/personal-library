const express = require('express');
const cors = require('cors');
const userRoutes = require('./api/user/user.routes');
const bookRoutes = require('./api/book/book.routes');
const noteRoutes = require('./api/note/note.routes');

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());

app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/note', noteRoutes);

app.get('/', (req, res) => {
    res.json('Welcome' )
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
