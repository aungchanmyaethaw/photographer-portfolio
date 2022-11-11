import { useEffect, useState } from "react";
import {
  LeftSidebar,
  Navbar,
  Overlay,
  RightSidebar,
  Footer,
  SearchForm,
  PexelsAPI,
  Photos,
  Categories,
  GalleryBtnsGroup,
  Loader,
  Error,
} from "../components";
import { useAppContext } from "../contexts";
import { motion } from "framer-motion";
const Gallery = () => {
  const { isSidebarOpen, setCurrentLink, url } = useAppContext();
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await PexelsAPI.get(url);
      setPhotos(res.data.photos);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setCurrentLink(1);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      fetchData();
    }

    return () => setIsMounted(false);
  }, [url]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="lg:px-12 py-16 md:py-[6em] sm:mb-4 md:mb-12">
        <h1 className="text-[2.4rem] lg:text-[4.2rem] text-light font-heading font-normal mb-8  lg:mb-12 lg:leading-[4.5rem]">
          Gallery
        </h1>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          <Categories />
          <SearchForm />
        </div>
        {isError && <Error />}
        {isLoading && <Loader />}
        {!isError && !isLoading && <Photos photos={photos} />}
        <div className="h-[1px] w-full bg-light my-12" />
        <GalleryBtnsGroup isEmpty={photos.length === 0} />
      </div>
      <LeftSidebar />
      <RightSidebar />
      <Overlay isOpen={isSidebarOpen} />
      <Footer />
    </motion.div>
  );
};

export default Gallery;
