const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const https = require("https");
const fs = require("fs");

const host = "0.0.0.0";
const port = 3000;
const app = express();

connectDB();

app.use(
  cors({
    origin: "https://ydenn.fr",
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// app.use(cors());
app.use(express.json());

const profilRoute = require("./api/routes/profilRoute");
profilRoute(app);

// app.listen(port, host, () => {
//   console.log(`Server is running at http://${host}:${port}/`);
// });

const sslServer = https.createServer(
  {
    key: fs.readFileSync("/etc/nginx/certs/api.ydenn.fr/privkey.pem"),
    cert: fs.readFileSync("/etc/nginx/certs/api.ydenn.fr/fullchain.pem"),
  },
  app
);

sslServer.listen(port, host, () => {
  console.log(`Secure Server running at https://${host}:${port}/`);
});
