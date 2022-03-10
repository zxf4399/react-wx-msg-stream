import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";

export interface DialogProps {
  visible: boolean;
}

const Dialog: React.FC<DialogProps> = ({ children, visible }) => {
  function renderDialog() {
    if (visible) {
      document.body.style.overflow = "hidden";

      return (
        <div className="dialog">
          <div className="dialog-mask" />
          <div className="dialog-content">{children}</div>
        </div>
      );
    } else {
      document.body.style.overflow = "visible";
    }

    return null;
  }

  return ReactDOM.createPortal(renderDialog(), document.body);
};

export default React.memo<React.FC<DialogProps>>(Dialog);
