import { render } from "@testing-library/react";
import dayjs from "dayjs";
import Message, { MessageProps } from "..";

describe("<Message />", () => {
  it("should support avatar", () => {
    const message: MessageProps = {
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
    };
    const { container } = render(<Message {...message} />);
    expect(container.querySelectorAll(".avatar").length).toBe(1);
  });

  it("should support time", () => {
    const message: MessageProps = {
      _id: "1",
      content: "你好，我是 Lagom",
      type: "text",
      user: {
        avatar: "https://i.imgur.com/CDE9fbS.jpg",
        name: "lagom",
      },
      createdAt: dayjs("2022-03-13").hour(12).minute(30).toDate(),
      hasTime: true,
      position: "left",
    };
    const { container } = render(<Message {...message} />);
    const element = container.querySelector(".content");

    expect(element).toHaveTextContent("12:30");
  });

  it("should support img", () => {
    const message: MessageProps = {
      _id: "1",
      content: "https://i.imgur.com/wJ9iXFC.png",
      type: "image",
      user: {
        avatar: "https://i.imgur.com/CDE9fbS.jpg",
        name: "lagom",
      },
      createdAt: new Date(),
      hasTime: false,
      position: "left",
    };
    const { container } = render(<Message {...message} />);
    const element = container.querySelector(".bubble.image img");

    expect(element).toBeInTheDocument();
  });

  it("should support system", () => {
    const content = "以上是打招呼的内容";
    const message: MessageProps = {
      _id: "1",
      content: "以上是打招呼的内容",
      type: "system",
      createdAt: new Date(),
      hasTime: false,
      position: "left",
    };
    const { getByText } = render(<Message {...message} />);
    const element = getByText(content);

    expect(element).toBeInTheDocument();
  });
});
