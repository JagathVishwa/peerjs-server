const { PeerServer } = require("peer");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 9000;

const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

const peerServer = PeerServer({
  port,
  path: "/peerjs"
});
