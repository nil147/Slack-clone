import { Button } from "@material-ui/core";
import React, { useRef } from "react";
import styled from "styled-components";
import { db } from "../firbase";
import firebase from "firebase";
import { useState } from "react";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
    console.log(channelId);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Neil Feinstein",
      userImg: "",
    });
    setInput("");
  };

  return (
    <ChatIputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${channelName}`}
        />
        <Button onClick={sendMessage} hidden type="submit">
          SEND
        </Button>
      </form>
    </ChatIputContainer>
  );
}

export default ChatInput;

const ChatIputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
