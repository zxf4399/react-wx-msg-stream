import { render } from "@testing-library/react";
import Dialog from "..";

describe("<Dialog />", () => {
  it("should render dialog", () => {
    const { container } = render(
      <Dialog visible>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores
          ipsa tenetur voluptatum voluptate. Veniam dolor accusantium ex
          laudantium porro consectetur aperiam saepe eveniet. Ipsum quidem modi
          magnam consectetur officia.
        </div>
      </Dialog>,
      { container: document.body }
    );

    const element = container.querySelector(".dialog");

    expect(element).toBeInTheDocument();
  });

  it("should not render dialog", () => {
    const { container } = render(
      <Dialog visible={false}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          molestias vel placeat quos explicabo dicta, facilis enim voluptates,
          quo quaerat aliquid itaque? Ad, fuga! Sed tempora minima ratione
          accusamus eveniet!
        </div>
      </Dialog>,
      { container: document.body }
    );

    const element = container.querySelector(".dialog");

    expect(element).not.toBeInTheDocument();
  });
});
