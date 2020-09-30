const app = require('express')();
const request = require('request');
const cors = require('cors');

const host = 'localhost';
const port = 7000;

app.use(cors())
app.options('*', cors())
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.get('/api', (req, res) => {
  const {description, location, full_time} = req.query;

  const options = {
    method: 'GET',
    uri: 'https://jobs.github.com/positions.json',
    qs: {
        description: description,
        location: location,
        full_time: full_time
    }
}

  request(options, function (error, response, body) {
      res.status(200).type('application/json')
      res.send(body);
  });
})

app.listen(port, host, function() {
  console.log(`Server listens http://${host}:${port}`)
})
