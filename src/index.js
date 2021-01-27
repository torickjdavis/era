require('dotenv').config();

const express = require('express');
const middleware = require('./middleware');
const { isDev } = require('./utils');

const app = express();

app.use(require('morgan')(isDev ? 'dev' : 'common'));
app.use(require('helmet')());
app.use(require('cors')());
app.use(express.json());

app.use(express.static('public'));

app.use('/api', require('./routes/api'));

app.use(middleware.notFound);
app.use(middleware.error);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => console.log(`Server listening at http://${HOST}:${PORT}`));
