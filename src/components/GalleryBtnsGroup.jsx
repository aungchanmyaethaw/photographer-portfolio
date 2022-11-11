import { useAppContext } from "../contexts";
const GalleryBtnsGroup = ({ isEmpty }) => {
  const { nextGalleryPage, prevGalleryPage, currentGalleryPage } =
    useAppContext();

  if (isEmpty) return null;

  return (
    <div className="relative">
      {currentGalleryPage >= 2 && (
        <button onClick={prevGalleryPage} className="my-btn absolute left-0">
          prev
        </button>
      )}

      {currentGalleryPage < 7 && (
        <button onClick={nextGalleryPage} className="my-btn absolute right-0">
          next
        </button>
      )}
    </div>
  );
};

export default GalleryBtnsGroup;
