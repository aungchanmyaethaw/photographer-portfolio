import { useEffect } from "react";
import {
  LeftSidebar,
  Navbar,
  Overlay,
  RightSidebar,
  AboutContent,
  ReviewCarousel,
  Footer,
} from "../components";
import { useAppContext } from "../contexts";
const About = () => {
  const { isSidebarOpen, setCurrentLink } = useAppContext();

  useEffect(() => {
    setCurrentLink(2);
  }, []);

  return (
    <>
      <Navbar />
      <div className="lg:px-12 py-16 md:py-[6em] sm:mb-4 md:mb-12">
        <h1 className="text-[2.4rem] lg:text-[4.2rem] text-light font-heading font-normal  lg:mb-6 lg:leading-[4.5rem]">
          About Me
        </h1>
        <AboutContent />
        <ReviewCarousel />
      </div>

      <LeftSidebar />
      <RightSidebar />
      <Overlay isOpen={isSidebarOpen} />
      <Footer />
    </>
  );
};

export default About;
