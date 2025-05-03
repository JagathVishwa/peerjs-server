const express = require("express");
const cors = require("cors");
const { ExpressPeerServer } = require("peer");

const app = express();
app.use(cors());

const port = process.env.PORT || 9000;

const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

const peerServer = ExpressPeerServer(server, {
  path: "/peerjs",
  allow_discovery: true
});

app.use("/peerjs", peerServer);
