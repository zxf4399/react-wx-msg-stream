import { render } from "@testing-library/react";
import Avatar from "..";

describe("<Avatar />", () => {
  it("should render avatar", () => {
    const src = "https://i.imgur.com/CDE9fbS.jpg";
    const alt = "lagom";
    const { container } = render(<Avatar src={src} alt={alt} />);
    const avatarImg = container.querySelector("img");

    expect(avatarImg && avatarImg.getAttribute("src")).toBe(src);
    expect(avatarImg && avatarImg.getAttribute("alt")).toBe(alt);
  });
});
