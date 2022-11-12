import Masonry from "react-masonry-css";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const breakPoints = {
  default: 3,
  640: 1,
};

const Photos = ({ photos }) => {
  if (photos.length === 0) {
    return (
      <h2 className="text-center text-[1.75rem] text-light font-heading py-4">
        No Result!
      </h2>
    );
  }

  return (
    <Masonry breakpointCols={breakPoints} className="flex gap-4 mt-16">
      {photos.map((photo, index) => {
        const currentPhoto = index + 1;

        return (
          <Link to={`/photo/${photo.id}`} key={photo.id}>
            <div className="mb-4 overflow-hidden rounded-lg  border-2 border-light relative cursor-pointer gallery-photo ">
              <img
                alt={photo.alt}
                src={
                  currentPhoto % 2 !== 0 ? photo.src.tiny : photo.src.portrait
                }
                className="w-full h-full object-cover"
              />
              <div className="photo-overlay">
                <AiFillEye className="text-4xl text-light" />
              </div>
            </div>
          </Link>
        );
      })}
    </Masonry>
  );
};

export default Photos;
