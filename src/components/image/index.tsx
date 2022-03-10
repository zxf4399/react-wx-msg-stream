import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lazy?: boolean;
}

const Image = (props: ImageProps) => {
  const { className, src: oSrc = "", lazy, ...other } = props;
  const [src, setSrc] = useState("");
  const isLazyLoaded = useRef(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSrc(oSrc);
        isLazyLoaded.current = true;
        observer.unobserve(entry.target);
      }
    });

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
      isLazyLoaded.current = false;
    };
  }, [lazy]);

  useEffect(() => {
    setSrc(lazy && !isLazyLoaded.current ? "" : oSrc);
  }, [lazy, oSrc]);

  return (
    <img
      alt=""
      className={classNames("image", className)}
      ref={imgRef}
      src={src}
      {...other}
    />
  );
};

export default React.memo(Image);
