const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', (request, response) => {
    // send index.html for all the requests
    response.sendFile('public/index.html', { root: __dirname });
});

app.listen(PORT, () => console.log(`App running at ${PORT}`));
