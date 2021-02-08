const Koa = require("koa");
const http = require("http");
const socket = require("socket.io");

const app = new Koa();
const server = http.createServer(app.callback());
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const SERVER_HOST = "localhost";
const SERVER_PORT = 3001;

io.on("connection", (socket) => {
  // console.log(io.sockets.server.eio.clientsCount);
  // console.log(io.clients);
  console.log("[SOCKET] connect");
  socket.on("chat.message", (data) => {
    console.log("[CHAT_MESSAGE] =>", data);
    io.emit("chat.message", data);
  });
  socket.on("disconnect", () => {
    console.log("[SOCKET] has disconnect");
  });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log("Server run");
});
