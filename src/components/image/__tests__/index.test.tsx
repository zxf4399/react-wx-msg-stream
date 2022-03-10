import { render } from "@testing-library/react";
import Image from "..";

const testImg = "https://i.imgur.com/wJ9iXFC.png";

describe("<Image />", () => {
  it("should render the image", () => {
    const { getByTestId } = render(<Image src={testImg} data-testid="img" />);
    const img = getByTestId("img");

    expect(img).toHaveAttribute("src", testImg);
  });

  it("should lazy render", () => {
    const { getByTestId } = render(
      <Image src={testImg} lazy data-testid="img" />
    );
    const img = getByTestId("img");

    expect(img).toHaveAttribute("src", "");
  });
});
