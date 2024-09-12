const express = require('express');
require('./db/connection');
const Student = require('./models/students');
const router = require('./routes/routes');
require('@keploy/sdk/dist/v2/dedup/register')

const app = express();

app.use(express.json());
app.use(router);

app.listen(8000, () => {
    console.log(`Listening on port 8000`);
})