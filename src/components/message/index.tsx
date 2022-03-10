import { tuple } from "@/utils/type";
import classNames from "classnames";
import dayjs from "dayjs";
import React from "react";
import { useContext, useMemo } from "react";
import Avatar from "../avatar";
import Bubble from "../bubble";
import { ChatContext } from "../chat";
import Image from "../image";
import SystemMessage from "./system-message";

const PositionTypes = tuple("left", "right");
const ContentTypes = tuple("text", "image", "system");

type PositionType = typeof PositionTypes[number];
type ContentTypes = typeof ContentTypes[number];

export interface MessageProps {
  // 唯一标识
  _id: string;
  // 消息创建时间
  createdAt: Date;
  // 是否显示时间
  hasTime: boolean;
  // 消息发送位置
  position: PositionType;
  // 消息发送者
  user?: {
    avatar: string;
    name: string;
  };
  content: string;
  type: ContentTypes;
}

const Message = ({
  content,
  createdAt,
  hasTime,
  position,
  type,
  user,
}: MessageProps) => {
  const time = useMemo(() => createdAt, [createdAt]);
  const chatCtx = useContext(ChatContext);

  function renderMessageContent() {
    function handleClickImg() {
      chatCtx?.setState((draft) => {
        draft.previewImg.picUrl = content;
        draft.previewImg.visible = true;
      });
    }

    if (type === "text") {
      return <Bubble className={position} content={content} type={type} />;
    }

    if (type === "image") {
      return (
        <Bubble type="image">
          <Image lazy onClick={handleClickImg} src={content} />
        </Bubble>
      );
    }
  }

  if (type === "system") {
    return <SystemMessage content={content} />;
  }

  return (
    <div className="message">
      {hasTime && createdAt && (
        <SystemMessage content={dayjs(time).format("HH:mm")} />
      )}
      <div className={classNames("message-content", position)}>
        {user && <Avatar alt={user.name} src={user.avatar} />}
        {renderMessageContent()}
      </div>
    </div>
  );
};

export default React.memo(Message);
