import { MessageProps } from "@/components/message";
import { nanoid } from "nanoid";
import { useMemo } from "react";

export type MessageWithoutId = Pick<
  Partial<MessageProps>,
  "createdAt" | "hasTime" | "position"
> &
  Omit<MessageProps, "_id" | "createdAt" | "hasTime" | "position">;

let lastTime = 0;

const makeMsg = (msg: MessageWithoutId) => {
  const createdAt = msg.createdAt || new Date();
  const createdTimestamp = createdAt.getTime();
  const hasTime = createdTimestamp - lastTime > 5 * 60 * 1000;

  if (hasTime) {
    lastTime = createdTimestamp;
  }

  return {
    ...msg,
    _id: nanoid(),
    createdAt,
    hasTime,
    position: msg.position || "left",
  };
};

export default function useMessages(initialState: MessageWithoutId[] = []) {
  const mapMsgs = useMemo(() => initialState.map(makeMsg), [initialState]);

  return mapMsgs;
}
