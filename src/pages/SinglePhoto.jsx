import { useState, useEffect } from "react";
import {
  Loader,
  PexelsAPI,
  Navbar,
  LeftSidebar,
  RightSidebar,
  Footer,
  Photo,
  Overlay,
  Error,
} from "../components";
import { useAppContext } from "../contexts";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const SINGLE_PHOTO_URL = "https://api.pexels.com/v1/photos/";

const SinglePhoto = () => {
  const { id } = useParams();
  const { setCurrentLink, isSidebarOpen } = useAppContext();
  const [photo, setPhoto] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getPhoto = async () => {
    setIsLoading(true);
    try {
      const res = await PexelsAPI.get(`${SINGLE_PHOTO_URL}${id}`);
      setPhoto(res.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    setCurrentLink(1);
  }, []);

  useEffect(() => {
    getPhoto();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="lg:px-12 py-16 md:py-[6em] sm:mb-4 md:mb-12">
        {isError && <Error />}
        {!isError && <Photo {...photo} />}
      </div>
      <LeftSidebar />
      <RightSidebar />
      <Overlay isOpen={isSidebarOpen} />
      <Footer />
    </motion.div>
  );
};

export default SinglePhoto;
