import React from "react";
import Image from "../image";
import "./style/index.scss";

export interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar = ({ alt, src }: AvatarProps) => {
  return <Image alt={alt} className="avatar" src={src} />;
};

export default React.memo(Avatar);
