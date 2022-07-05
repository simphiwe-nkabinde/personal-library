const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.json('Welcome' )
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
