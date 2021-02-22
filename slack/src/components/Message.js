import React from "react";
import styled from "styled-components";

function Message({ message, timestamp, user, userImg }) {
  return (
    <MessageContainer>
      <img src={userImg} alt="" />
      <MessageInfo>
        <h4>
          {user}{" "}
          <span>{new Date(timestamp?.toDate()).toLocaleTimeString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    margin-right: 10px;
    border-radius: 8px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 1px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
