import { render } from "@testing-library/react";
import Bubble from "..";

describe("<Bubble />", () => {
  it("should render bubble", () => {
    const type = "text";
    const { container } = render(<Bubble type={type} />);
    const element = container.querySelector(".bubble");

    expect(element).toHaveClass(type);
  });

  it("should render bubble with a element", () => {
    const type = "text";
    const content =
      "访问这个地址 https://segmentfault.com/a/1190000011145364 可以解决这个问题";
    const { container } = render(<Bubble type={type} content={content} />);
    const element = container.querySelector("a");

    expect(element).toHaveTextContent(
      "https://segmentfault.com/a/1190000011145364"
    );
  });
});
