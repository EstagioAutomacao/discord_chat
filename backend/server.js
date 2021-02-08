const Koa = require("koa");
const http = require("http");
const socket = require("socket.io");
const { userJoin, getCurrentUser, userLeave, getUsersRoom } = require("./user");

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
  socket.on("joinRoom", (user) => {
    console.log(user.userName, " name");
    const user2 = userJoin(
      user.userID,
      socket.id,
      user.userName,
      "roomTeste",
      user.color
    );
    socket.join(user2.room);
    console.log("[SOCKET] connect");
    socket.on("chat.message", (data) => {
      const user3 = getCurrentUser(user.userID);
      // console.log("[CHAT_MESSAGE] =>", data);
      io.to(user3.room).emit("chat.message", data);
    });
    // socket.broadcast.to(user.room).emit("chat.message", {
    //   userName: user.username,
    //   messageID: "1982j",
    //   id: 0,
    //   message: "Teste",
    // });
    io.to(user2.room).emit("roomUsers", {
      room: user2.room,
      users: getUsersRoom(user2.room),
    });
  });
  socket.on("disconnect", () => {
    const user_logout = userLeave(socket.id);
    console.log("[SOCKET] has disconnect");
    console.log(user_logout);
  });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log("Server run");
});
