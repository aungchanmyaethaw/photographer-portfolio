import { useEffect } from "react";
import {
  LeftSidebar,
  Navbar,
  Overlay,
  RightSidebar,
  Footer,
  SearchForm,
} from "../components";
import { useAppContext } from "../contexts";
import { categories } from "../datas";
const Gallery = () => {
  const { isSidebarOpen, setCurrentLink } = useAppContext();

  useEffect(() => {
    setCurrentLink(1);
  }, []);

  return (
    <>
      <Navbar />
      <div className="lg:px-12 py-16 md:py-[6em] sm:mb-4 md:mb-12">
        <h1 className="text-[2.4rem] lg:text-[4.2rem] text-light font-heading font-normal mb-62  lg:mb-12 lg:leading-[4.5rem]">
          Gallery
        </h1>
        {/* Filtering */}
        <div className="flex justify-between items-center">
          {/* category */}
          <ul className="flex gap-8">
            {categories.map(({ id, text }) => (
              <li
                key={id}
                className="text-light font-heading font-bold cursor-pointer hover:text-secondary"
              >
                {text}
              </li>
            ))}
          </ul>
          {/* search */}
          <SearchForm />
        </div>
      </div>
      <LeftSidebar />
      <RightSidebar />
      <Overlay isOpen={isSidebarOpen} />
      {/* <Footer /> */}
    </>
  );
};

export default Gallery;
