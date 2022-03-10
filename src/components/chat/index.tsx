import classNames from "classnames";
import React, { useCallback } from "react";
import { Updater, useImmer } from "use-immer";
import MessageContainer, { MessageContainerProps } from "../message-container";
import PreviewImg from "../preview-img";

type State = {
  previewImg: {
    picUrl?: string;
    visible: boolean;
  };
};
type ChatContextValue = {
  setState: Updater<State>;
  state: State;
};

export const ChatContext = React.createContext<ChatContextValue | null>(null);

export interface ChatProps extends MessageContainerProps {
  className?: string;
}

const Chat = ({ className, messages }: ChatProps) => {
  const [state, setState] = useImmer<State>({
    previewImg: {
      visible: false,
    },
  });

  const previewImgOnClose = useCallback(() => {
    setState((draft) => {
      draft.previewImg.visible = false;
      draft.previewImg.picUrl = "";
    });
  }, []);

  return (
    <ChatContext.Provider value={{ state, setState }}>
      <div className={classNames("chat", className)}>
        <MessageContainer messages={messages} />
        <PreviewImg {...state.previewImg} onClose={previewImgOnClose} />
      </div>
    </ChatContext.Provider>
  );
};

export default React.memo(Chat);
