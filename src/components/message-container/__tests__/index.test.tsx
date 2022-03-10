import { MessageProps } from "@/components/message";
import { render } from "@testing-library/react";
import MessageContainer from "..";

describe("<MessageContainer />", () => {
  it("should render MessageContainer", () => {
    const messages: MessageProps[] = [
      {
        _id: "1",
        content: "你好，我是 Lagom",
        type: "text",
        user: {
          avatar: "https://i.imgur.com/CDE9fbS.jpg",
          name: "lagom",
        },
        createdAt: new Date(),
        hasTime: true,
        position: "left",
      },
      {
        _id: "2",
        content: "以上是打招呼的内容",
        type: "system",
        createdAt: new Date(),
        hasTime: false,
        position: "left",
      },
    ];

    const { container } = render(<MessageContainer messages={messages} />);

    expect(container.querySelector(".message-list")?.children.length).toBe(2);
  });
});
