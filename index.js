const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());




app.listen(port, () => {
    console.log('news server is running', port);
})