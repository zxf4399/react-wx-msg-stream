import React from "react";
import "./style/index.scss";

interface SystemMessageProps {
  content?: string;
}

const SystemMessage = ({ content }: SystemMessageProps) => {
  return (
    <div className="message-system">
      <div className="content">{content}</div>
    </div>
  );
};

export default React.memo(SystemMessage);
