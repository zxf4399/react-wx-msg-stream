import React from "react";
import Message, { MessageProps } from "../message";

export interface MessageContainerProps {
  messages: MessageProps[];
}

const MessageContainer = ({ messages }: MessageContainerProps) => {
  return (
    <div>
      <div className="message-list">
        {messages.map((message) => (
          <Message {...message} key={message._id} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MessageContainer);
