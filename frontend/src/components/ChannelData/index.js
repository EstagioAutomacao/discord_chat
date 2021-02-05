import React, { useRef, useEffect, useState } from "react";
import ChannelMessages, { Mention } from "../ChannelMessages";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import io from "socket.io-client";
import { v4 as uuid } from "uuid";

const socket = io("http://localhost:3001");
socket.on("connect", () => console.log("connect socket"));
const myId = uuid();

const ChannelData = (props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { user, setUser } = props;

  let data = new Date();
  let dataAtual =
    "0" +
    data.getDate() +
    "/0" +
    (data.getMonth() + 1) +
    "/" +
    data.getFullYear();

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
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessages
          author="Equipe Fake"
          date={dataAtual}
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
            date={dataAtual}
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
  );
};

export default ChannelData;
