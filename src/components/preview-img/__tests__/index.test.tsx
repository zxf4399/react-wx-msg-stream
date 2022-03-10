import { fireEvent, render } from "@testing-library/react";
import PreviewImg from "..";

describe("<PreviewImg />", () => {
  it("should be onClose", () => {
    const onClose = jest.fn();

    const { container } = render(
      <PreviewImg
        visible
        onClose={onClose}
        picUrl="https://i.imgur.com/wJ9iXFC.png"
      />,
      {
        container: document.body,
      }
    );

    const element = container.querySelector(".preview-close");

    if (element) {
      fireEvent.click(element);
      expect(onClose).toHaveBeenCalled();
    }
  });
});
