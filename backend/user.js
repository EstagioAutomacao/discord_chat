const users = [];

function verifyExists(id) {
  // console.log(users.find((user) => user.id === id));
  return users.find((user) => user.id === id);
}

function userJoin(id, socketId, username, room, color) {
  const user = { id, socketId, username, room, color };
  if (verifyExists(id)) {
    return user;
  }
  users.push(user);
  return user;
}

function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

function userLeave(id) {
  const index = users.findIndex((user) => user.socketId === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function getUsersRoom(room) {
  console.log(users.filter((user) => user.room === room));
  return users.filter((user) => user.room === room);
}
module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getUsersRoom,
};
