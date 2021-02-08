import React, { useRef, useEffect, useState, useContext } from "react";
import ChannelMessages, { Mention } from "../ChannelMessages";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import io from "socket.io-client";
import { v4 as uuid } from "uuid";
import { UsersContext } from "../../UsersContext";
import Moment from "moment";

const socket = io("http://localhost:3001");
socket.on("connect", () => console.log("connect socket"));
const myId = uuid();

const ChannelData = (props) => {
  const containerRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { user, setUser } = props;

  const { users2, handleUsers } = useContext(UsersContext);

  socket.on("roomUsers", ({ room, users }) => {
    handleUsers(users);
  });

  const data = Moment().format("MM/DD/YYYY HH:mm");

  function handleMessage(e) {
    e.preventDefault();
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (message.trim()) {
      const messageID = uuid();
      socket.emit("chat.message", {
        userName: user.userName,
        messageID: messageID,
        id: myId,
        message,
      });
      setMessage("");
    }
    // console.log(messages);
  }

  const messageRef = useRef(null);
  useEffect(() => {
    const div = messageRef.current;
    socket.emit("joinRoom", user);
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  useEffect(() => {
    const handleNewMessage = (newMessage) =>
      setMessages([...messages, newMessage]);
    socket.on("chat.message", handleNewMessage);
    return () => socket.off("chat.message", handleNewMessage);
  }, [messages]);

  return (
    <React.Fragment>
      <Container ref={containerRef}>
        <Messages ref={messageRef}>
          <ChannelMessages
            author="Equipe Fake"
            date={data}
            content={
              <>
                <Mention>@{user.userName}</Mention>, Bem-vindo!
              </>
            }
            hasMention
            isBot
          />
          {messages.map((m) => (
            <ChannelMessages
              key={m.messageID}
              author={m.userName}
              date={data}
              content={m.message}
            />
          ))}
        </Messages>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              value={message}
              type="text"
              placeholder="Conversar em #chat-livre"
              autoFocus
              onChange={handleMessage}
            />
            <InputIcon />
          </InputWrapper>
        </form>
      </Container>
    </React.Fragment>
  );
};
function areEqual(prevProps, nextProps) {
  console.log("areEqual");
  console.log(prevProps);
  console.log(nextProps);
  return prevProps.user.userName === nextProps.user.userName;
}

export default React.memo(ChannelData, areEqual);
