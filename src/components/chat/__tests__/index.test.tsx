import { MessageProps } from "@/components/message";
import { fireEvent, render } from "@testing-library/react";
import Chat from "..";

describe("<Chat />", () => {
  it("should render image message", () => {
    const messages: MessageProps[] = [
      {
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
      },
    ];

    const { container } = render(<Chat messages={messages} />, {
      container: document.body,
    });
    const bubbleImg = container.querySelector(".bubble.image .image");

    if (bubbleImg) {
      fireEvent.click(bubbleImg);

      const previewImg = document.querySelector(".preview .image");

      expect(previewImg).toBeInTheDocument();

      if (previewImg) {
        const previewClose = document.querySelector(".preview-close");

        if (previewClose) {
          fireEvent.click(previewClose);

          const dialog = document.querySelector(".dialog");

          expect(dialog).not.toBeInTheDocument();
        }
      }
    }
  });
});
