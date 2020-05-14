import React, { useEffect, useRef } from "react";

export default (props) => {
  const { url } = props;
  const imageRef = useRef();
  useEffect(() => {
    if (url && imageRef.current) {
      imageRef.current.setAttribute("src", url);
    }
  }, [url, imageRef]);
  return <image ref={imageRef} />;
};
