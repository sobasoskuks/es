// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/stares,rter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html

app.get('/invite', async (req, res) => {
res.redirect('https://discord.com/api/oauth2/authorize?client_id=792004408380096523&permissions=8&redirect_uri=https%3A%2F%2Fmitsuru.glitch.me%2F&scope=bot')
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("naik kereta api... " + listener.address().port);
});
