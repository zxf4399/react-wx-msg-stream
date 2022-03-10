import React from "react";
import Dialog, { DialogProps } from "../dialog";
import Image from "../image";
import "./style/index.scss";

interface PreviewImgProps extends DialogProps {
  onClose: () => void;
  picUrl?: string;
}

const PreviewImg: React.FC<PreviewImgProps> = ({
  onClose,
  picUrl,
  visible,
}) => {
  return (
    <Dialog visible={visible}>
      <div className="preview">
        <Image lazy src={picUrl} />
        <i className="preview-close" onClick={onClose} />
      </div>
    </Dialog>
  );
};

export default React.memo(PreviewImg);
