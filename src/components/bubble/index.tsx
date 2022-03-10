import { includeUrlReg } from "@/utils/reg";
import classNames from "classnames";
import React from "react";
import { MessageProps } from "../message";
import "./style/index.scss";

export interface BubbleProps
  extends Pick<Partial<MessageProps>, "content">,
    Pick<MessageProps, "type"> {
  className?: string;
}

const Bubble: React.FC<BubbleProps> = ({
  className,
  children,
  content,
  type,
}) => {
  return (
    <div className={classNames("bubble", type, className)}>
      {content && (
        <div
          dangerouslySetInnerHTML={{
            __html: content?.replace(
              includeUrlReg,
              (match) => `<a href="${match}" target="_blank">${match}</a>`
            ),
          }}
        />
      )}
      {children}
    </div>
  );
};

export default React.memo<React.FC<BubbleProps>>(Bubble);
