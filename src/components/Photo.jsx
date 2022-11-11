import { useState, useEffect } from "react";
import { useWindowDimensions } from "../hooks";

const Photo = ({ src, alt }) => {
  const { width: windowWidth } = useWindowDimensions();
  const [photoSize, setPhotoSize] = useState(src.landscape);
  useEffect(() => {
    if (windowWidth <= 1024) {
      setPhotoSize(src.portrait);
    } else {
      setPhotoSize(src.landscape);
    }
  }, [windowWidth]);

  return (
    <div>
      <figure className="w-full">
        <img src={photoSize} alt={alt} />
        {alt && (
          <figcaption className="text-light text-paragraph mt-4">
            {alt}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default Photo;
